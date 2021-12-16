// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1ha8qed9itcd5locvmege6l626",     // CognitoClientID
  "api_base_url": "https://szeepxaaui.execute-api.eu-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless-web-app-demo.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1dc6vq84lftll.amplifyapp.com"                                      // AmplifyURL
};

export default config;
