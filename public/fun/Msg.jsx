
    export async function messagess(setname) {
        try {
          const response = await fetch("http://localhost:5000/api",
            {
              headers:{
                'Content-Type': 'application/json',
                "access":localStorage.getItem("token")
              }
            }
          );
          const data = await response.json();
        setname(data)

        } catch (error) {
          console.error(error);
        }
      }
