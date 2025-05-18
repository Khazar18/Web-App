export const Reset_Password_Email_Template = (name, resetLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
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
            <h1>Password Reset Request</h1>
        </div>
        <div class="content">
            <p>Hello, ${name}</p>
            <p>We received a request to reset your password. Click the link below to reset your password:</p>
            <p><a href="${resetLink}">Reset Password</a></p>
            <p>If you did not request a password reset, please ignore this email.</p>
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Academora. All rights reserved.
        </div>
    </div>
</body>
</html>
`;