var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Meow");

app.MapGet("/test", () => "Test Succesful");

app.Run();
