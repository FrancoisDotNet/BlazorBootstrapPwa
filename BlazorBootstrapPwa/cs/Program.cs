using Blazored.LocalStorage;
using Microsoft.AspNetCore.Blazor.Hosting;
using System.Threading.Tasks;

namespace BlazorBootstrapPwa
{
    class Program
    {
        public static async Task Main()
        {   
            var builder = WebAssemblyHostBuilder.CreateDefault();
            builder.RootComponents.Add<razor.Body>("body");
            builder.Services.AddBlazoredLocalStorage();
            await builder.Build().RunAsync();
        }
    }
}