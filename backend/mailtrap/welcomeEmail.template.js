export const Welcome_Email_Template = (email, name) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Academora</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            background-color: #8A34CD;
            color: #ffffff;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        .header img {
            max-width: 100px;
        }
        .content {
            text-align: center;
            padding: 20px;
        }
        .content h1 {
            color: #333333;
        }
        .content p {
            color: #666666;
            line-height: 1.6;
        }
        .user-details {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .user-details p {
            margin: 5px 0;
            color: #333333;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            color: #999999;
            font-size: 12px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://via.placeholder.com/100" alt="Academora Logo">
            <h2>Welcome to Academora</h2>
        </div>
        <div class="content">
            <h1>Hello, ${name}!</h1>
            <p>We are thrilled to have you at Academora. Our goal is to provide you with the best learning experience possible. If you have any questions, feel free to reach out to our support team.</p>
            <div class="user-details">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            </div>
            <p>Happy Learning!</p>
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Academora. All rights reserved.
        </div>
    </div>
</body>
</html>
`;

