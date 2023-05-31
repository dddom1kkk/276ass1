FROM maven:3.8.5-openjdk-17 as build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /target/ass1-0.0.1-SNAPSHOT.jar ass1.jar
EXPOSE 8080
ENTRYPOINT [ "java","-jar","ass1.jar"]