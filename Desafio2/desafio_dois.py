import datetime

def gerar_arquivo_aniversariantes_mes_atual(text_file):
    current_month = datetime.datetime.now().month
    birthdays = []

    with open (text_file, "r") as file:
        for line in file:
            name, email, birthday = line.strip().split("|")
            day, month, year = map(int,birthday.split("/"))

            if month == current_month:
                birthdays.append((name, email, birthday))

    file_output = f"consultores_aniversariantes_mes_{current_month}.txt"

    with open (file_output, "w") as file:
        for name, email, birthday in birthdays:
            message = f"Prezado, {name}! Desejamos um feliz aniversário! - ModalGR!"
            file.write(f"{name} | {email} | {birthday} \n {message}")


gerar_arquivo_aniversariantes_mes_atual('dados_consultores.txt')            