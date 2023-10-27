const service =require("./service");

service.app.listen(service.PORT, service.HOST, () => {
    console.log(`Server is running on: ${service.PROTOCOL}://${service.HOST}:${service.PORT}`);
});
