import logging
from telegram import Update, ReplyKeyboardRemove, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.constants import ParseMode
from telegram.helpers import escape_markdown # ## MELHORIA ## Importa a função para corrigir o erro de finalização
from telegram.ext import (
    Application,
    CommandHandler,
    MessageHandler,
    ConversationHandler,
    ContextTypes,
    CallbackQueryHandler,
    filters,
)

# --- CONFIGURAÇÕES INICIAIS ---
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO
)
logging.getLogger("httpx").setLevel(logging.WARNING)
logger = logging.getLogger(__name__)

# COLOQUE AQUI O ID DO CHAT PARA ONDE AS NOTIFICAÇÕES DEVEM IR
DONO_DO_LAVA_RAPIDO_CHAT_ID =8257511313 # Ex: 123456789

NOME, TELEFONE, VEICULO, SERVICO, DATA_HORA = range(5)


# --- FUNÇÕES DO BOT ---

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    # ## MELHORIA ## Mensagem inicial mais clara
    await update.message.reply_text(
        'Olá! ✨ Bem-vindo ao sistema de agendamento da DRCAR Estética Automotiva!\n\n'
        'Vou te fazer algumas perguntas para agilizar tudo.\n\n'
        'Para começar, por favor, me diga seu nome.\n\n'
        '_(A qualquer momento, você pode digitar /cancelar para recomeçar do zero)._',
        parse_mode=ParseMode.MARKDOWN
    )
    return NOME

async def recebe_nome(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user_data = context.user_data
    user_data['nome'] = update.message.text.strip()
    logger.info("Nome do cliente: %s", user_data['nome'])
    
    await context.bot.send_chat_action(chat_id=update.effective_chat.id, action='typing')
    await update.message.reply_text(
        f"Show, {user_data['nome']}! Qual o seu melhor telefone para contato? 📞\n(Com DDD, por favor)"
    )
    return TELEFONE

async def recebe_telefone(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user_data = context.user_data
    user_data['telefone'] = update.message.text
    logger.info("Telefone do cliente: %s", user_data['telefone'])

    await context.bot.send_chat_action(chat_id=update.effective_chat.id, action='typing')
    await update.message.reply_text('Anotado! Agora, me diga qual é a máquina. 🚗 (Ex: Honda Civic, Onix, etc.)')
    return VEICULO

async def recebe_veiculo(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user_data = context.user_data
    user_data['veiculo'] = update.message.text
    logger.info("Veículo do cliente: %s", user_data['veiculo'])
    
    keyboard = [
        [InlineKeyboardButton("🚿 Lavagem Simples", callback_data='Lavagem Simples')],
        [InlineKeyboardButton("✨ Lavagem Completa", callback_data='Lavagem Completa')],
        [InlineKeyboardButton("💎 Polimento", callback_data='Polimento')],
        [InlineKeyboardButton("🛋️ Higienização Interna", callback_data='Higienização Interna')],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await context.bot.send_chat_action(chat_id=update.effective_chat.id, action='typing')
    await update.message.reply_text('Perfeito! Qual destes serviços vai deixar seu carro brilhando hoje?', reply_markup=reply_markup)
    return SERVICO

async def recebe_servico_botao(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query
    await query.answer()

    user_data = context.user_data
    user_data['servico'] = query.data
    logger.info("Serviço escolhido: %s", user_data['servico'])
    
    await query.edit_message_text(text=f"Serviço selecionado: {query.data} 👍")

    await context.bot.send_chat_action(chat_id=update.effective_chat.id, action='typing')
    await context.bot.send_message(
        chat_id=update.effective_chat.id,
        text='Ótima escolha! Para finalizar, me diga qual a melhor data e hora para você. 🗓️\n(Ex: Amanhã às 10:00, ou 05/10 às 15:30)'
    )
    return DATA_HORA

async def recebe_data_hora(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user_data = context.user_data
    user_data['data_hora'] = update.message.text
    logger.info("Data/Hora sugerida: %s", user_data['data_hora'])
    
    try:
        # ## MELHORIA ## Escapa os caracteres especiais para evitar erros no envio
        nome_cliente = escape_markdown(user_data['nome'], version=2)
        tel_cliente = escape_markdown(user_data['telefone'], version=2)
        veiculo_cliente = escape_markdown(user_data['veiculo'], version=2)
        servico_cliente = escape_markdown(user_data['servico'], version=2)
        data_cliente = escape_markdown(user_data['data_hora'], version=2)

        mensagem_para_o_dono = (
            f"🔔 *Novo Agendamento Recebido\\!*\n\n"
            f"👤 *Cliente:* {nome_cliente}\n"
            f"📞 *Contato:* {tel_cliente}\n"
            f"🚗 *Veículo:* {veiculo_cliente}\n"
            f"🛠️ *Serviço:* {servico_cliente}\n"
            f"🗓️ *Horário Sugerido:* {data_cliente}\n\n"
            f"_Entre em contato com o cliente para confirmar\\._"
        )
        await context.bot.send_message(
            chat_id=DONO_DO_LAVA_RAPIDO_CHAT_ID,
            text=mensagem_para_o_dono,
            parse_mode=ParseMode.MARKDOWN_V2 # Usa a versão 2, mais segura
        )
        
        await update.message.reply_text(
            '✅ *Agendamento solicitado com sucesso!*\n\n'
            'Recebemos suas informações e em breve entraremos em contato para confirmar todos os detalhes.\n\n'
            'Obrigado por escolher a DRCAR!',
            parse_mode=ParseMode.MARKDOWN
        )

    except Exception as e:
        logger.error(f"ERRO CRÍTICO AO FINALIZAR AGENDAMENTO: {e}")
        # ## MELHORIA ## Mensagem de erro mais clara para o usuário
        await update.message.reply_text(
            '❌ Ops, tivemos um problema para processar seu agendamento no último passo.\n\n'
            'Por favor, tente novamente clicando em /start para recomeçar do zero.'
        )

    user_data.clear()
    return ConversationHandler.END

async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    await update.message.reply_text(
        'Tudo bem, o agendamento foi cancelado.\n\n'
        'Você pode começar de novo a qualquer momento clicando em /start.',
        reply_markup=ReplyKeyboardRemove()
    )
    context.user_data.clear()
    return ConversationHandler.END

# ## MELHORIA ## Nova função para lidar com entradas inesperadas
async def mensagem_desconhecida(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Lida com mensagens que o bot não espera durante a conversa."""
    await update.message.reply_text(
        "Hum, não entendi sua resposta\. 🤔\n\n"
        "Por favor, responda à pergunta que eu fiz ou, se quiser recomeçar, digite /cancelar\.",
        parse_mode=ParseMode.MARKDOWN_V2
    )

async def get_id(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    await update.message.reply_text(f"O ID deste chat é: `{chat_id}`")


def main() -> None:
    TOKEN = "8257511313:AAE_lem41vw7-KHez20lOxvqEdPu83nyxfs" 
    
    if "SEU_CHAT_ID_AQUI" == DONO_DO_LAVA_RAPIDO_CHAT_ID:
        logging.error("ERRO CRÍTICO: A variável 'DONO_DO_LAVA_RAPIDO_CHAT_ID' não foi definida.")
        return

    application = Application.builder().token(TOKEN).build()

    conv_handler = ConversationHandler(
        entry_points=[CommandHandler('start', start)],
        states={
            NOME: [MessageHandler(filters.TEXT & ~filters.COMMAND, recebe_nome)],
            TELEFONE: [MessageHandler(filters.TEXT & ~filters.COMMAND, recebe_telefone)],
            VEICULO: [MessageHandler(filters.TEXT & ~filters.COMMAND, recebe_veiculo)],
            SERVICO: [CallbackQueryHandler(recebe_servico_botao)],
            DATA_HORA: [MessageHandler(filters.TEXT & ~filters.COMMAND, recebe_data_hora)],
        },
        fallbacks=[
            CommandHandler('cancelar', cancel),
            # ## MELHORIA ## Adiciona um fallback para qualquer outra mensagem de texto
            MessageHandler(filters.TEXT, mensagem_desconhecida)
        ],
    )

    application.add_handler(conv_handler)
    application.add_handler(CommandHandler('id', get_id))

    print("Bot iniciado e aguardando mensagens...")
    application.run_polling()

if __name__ == '__main__':
    main()