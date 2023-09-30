# Projeto PI

## Dependencias
- [Nodejs](https://nodejs.org/pt-br) >= 16
- [JAVA 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) 
- [Maven](https://maven.apache.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Inicializar o projeto:

### Realizar a build do front-end

```sh
 cd frontend && yarn && yarn install
```

Isso vai gerar todo o código REACT via [vite](https://vitejs.dev/) e enviar para a pasta `src/main/resources`

### Configurar o arquivo `application.properties`

É necessário adicionar o usuário e senha corretos para o banco de dados.O nome do banco deve ser informado também(É utilizado `concessionaria` por padrão).

Exemplo:
```properties
# datasource PostgreSQL
spring.datasource.url = jdbc:postgresql://localhost:5432/<NOME_BANCO>
spring.datasource.username=<USUARIO_BANCO>
spring.datasource.password=<SENHA_BANCO>

# jpa
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
```

*Obs*: Substitua pelos valores corretos o que estiver entre "< VALOR >"


### Iniciar aplicação

Só apertar o "play" do eclipse agora(🤔?)