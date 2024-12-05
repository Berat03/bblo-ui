import json
from datetime import datetime, timedelta
import pandas as pd
import joblib

# Load the model
model = joblib.load('./models/arima_model.pkl')

def handler(event, context):
    try:
        # Parse the incoming JSON payload
        body = json.loads(event["body"])
        current_datetime = body.get("current_datetime")
        future_hours = body.get("future_hours", 48)  # Default to 48 if not provided

        if not current_datetime:
            return {"statusCode": 400, "body": json.dumps({"error": "No current datetime provided"})}

        # Generate timestamps for the prediction horizon
        start_datetime = datetime.fromisoformat(current_datetime)
        future_datetimes = [
            start_datetime + timedelta(hours=i) for i in range(future_hours)
        ]

        # Create a DataFrame with future datetimes
        future_df = pd.DataFrame({'datetime': future_datetimes})
        future_df['dayofweek'] = future_df['datetime'].dt.dayofweek

        # Use pd.get_dummies to one-hot encode the dayofweek column
        exog_df = pd.get_dummies(future_df['dayofweek'], prefix='Day', drop_first=True)

        # Predict using the model
        predictions = model.predict(n_periods=future_hours, X=exog_df)

        return {
            "statusCode": 200,
            "body": json.dumps({"predictions": predictions.tolist()})
        }
    except Exception as e:
        return {"statusCode": 500, "body": json.dumps({"error": str(e)})}
