export async function getServerSideProps(context) {
    // Extract current datetime
    const currentDatetime = new Date().toISOString(); // ISO string format for API compatibility
  
    // Number of hours to predict into the future
    const futureHours = 48;
  
    // Call the API to fetch predictions
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        current_datetime: currentDatetime,
        future_hours: futureHours,
      }),
    });
  
    const data = await response.json();
  
    // Pass predictions to the page component as props
    return {
      props: {
        predictions: data.predictions || [],
        currentDatetime, // Pass the datetime for reference
        futureHours,     // Pass future hours for reference
      },
    };
  }
  