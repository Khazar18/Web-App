export const Verification_email_template = (name, message, verificationCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            color: #ffffff;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #8A34CD;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
        }
            .h1 {color: #ffffff;  }
        .footer {
            background-color: #f4f4f4;
            color: #333333;
            padding: 10px 20px;
            text-align: center;
            border-radius: 0 0 8px 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome, ${name}!</h1>
        </div>
        <div class="content">
            <p>${message}</p>
            <p>Your verification code is: ${verificationCode}</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Academora. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

