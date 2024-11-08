async function main() {
    console.log("Iniciando despliegue del contrato HelloWorld...");
    console.log("Conectando a la red Bitfinity...");
    
    const [deployer] = await ethers.getSigners();
    console.log("Desplegando con la cuenta:", deployer.address);
    
    // Obtener el balance usando provider
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Balance de la cuenta:", ethers.formatEther(balance), "ETH");

    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    console.log("Contrato compilado correctamente");
    
    const helloWorld = await HelloWorld.deploy();
    console.log("Contrato en proceso de despliegue...");
    
    await helloWorld.waitForDeployment();
    const direccionContrato = await helloWorld.getAddress();
    console.log("✅ Contrato desplegado exitosamente en:", direccionContrato);
}

main()
    .then(() => {
        console.log("Despliegue completado con éxito");
        process.exit(0);
    })
    .catch((error) => {
        console.error("❌ Error en el despliegue:", error);
        process.exit(1);
    });
