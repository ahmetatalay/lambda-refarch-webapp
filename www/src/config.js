// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2ekt5su391hes13p436ctavde7",     // CognitoClientID
  "api_base_url": "https://v90f5rnr87.execute-api.eu-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless-web-app-demo.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d156dj82wks9nw.amplifyapp.com"                                      // AmplifyURL
};

export default config;
