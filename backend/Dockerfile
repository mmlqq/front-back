FROM tomcat:jdk8-openjdk
RUN mv webapps webapps2
RUN mv webapps.dist/ webapps
ADD /target/backend-1.0-SNAPSHOT.war /usr/local/tomcat/webapps
ADD /src/main/resources/context.xml /usr/local/tomcat/webapps/manager/META-INF/context.xml
ADD /src/main/resources/tomcat-users.xml /usr/local/tomcat/conf/tomcat-users.xml
EXPOSE 8080
CMD ["catalina.sh","run"]
