// Función para manejar el envío del formulario
async function submitForm(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const formData = {
        name: name,
        email: email,
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData), 
        });

        if (!response.ok) {
            throw new Error("Error al enviar los datos a la API externa.");
        }

        // Si se envían correctamente, redirigir a store.html
        window.location.href = "../paginas/store.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al enviar los datos. Intenta nuevamente.");
    }
}
