/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com"],
  },
  // env: {
  //   GOOGLE_ID:
  //     "472299508552-asa811qcdl3hg5262s4ui610s6v44c67.apps.googleusercontent.com",
  //   GOOGLE_SECRET: "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",
  //   OPENAI_API_KEY: "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",
  //   NEXTAUTH_SECRET: "ThisIsSuperSecretAuth",
  //   OPENAI_API_KEY: "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",
  //   FIREBASE_SERVICE_ACCOUNT_KEY:
  //     "{ 'type': 'service_account', 'project_id': 'gpt-project-f5c3a', 'private_key_id': 'c34c862260bb8b89581e8fc2379db3e0faef14c0', 'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0BLv+KOeHcQ8+\ns/mEJHp49RmxzhoGE/Grfgl2rAAyYBb7OWa8hz2dxwuS8+3Uku72MfwsxMkNA6MU\nR9skIjVdbXcjMaV9tTTrMK4x3oBdpQ4TG9SbOPpgfJ9UnogvjIDh55Yniq/uuoQx\nY4dCAbJlcgh57GeeG2MwJ7GUYY3lc1dWxsj7Uewq2s3azDdBxq5uesScQ+E1PbUB\npAZuK5jkRKonhrqczF/So9gawhzwh+GGbc3VbvQ/UJDXihewSfmnNCIoHZcE3YzS\n1JGO8LJ+VeSqWfrFCl5/Jm+uL0fxhjmrfjhRpCDpu7D2z6bgey9HMa0Aep4zmgOl\nfkumS9NTAgMBAAECggEAAypbet9Y5GIuYRMuNWjm8wL1g+327hKUE+BRdCJ/2JvP\n38nsbF5m8rXIiEf9ROKT9OhjSiu43JX7dAXOHEV5bMC9m62/GwqYMhr6jXitu1Hk\nisMIe41giDxnk/KQz008VedC8B3zpAZQaSKCkV2RKXaKfz7MBsIdMg6ULuxSvrHu\n0ugTH6y8UHyoZZ1iKBERtxUBrnACgcEhUK8c2YyTaJ93UJdyju7weLYZ3aS5iSL7\n0ca7brcFCHhPXdregqZCBfrwdKAhbEfRUexqwLkA00t5ifMXSIgwtJoniWdZBiFQ\n/0eI8RnTAApUptylnx+hT68we3zjeeib2SlSyV6wcQKBgQDtonHkbseIXupuYKF/\njfDgcMAP0Xq2UBFDT68VFme3crS5J2mgWP8ACwmO5g/Hbvtj6YZt1A8DhCNhk3dM\ny72gOlhqxiaCFuzTVqxbI4BE4d1lAxQd6+3SmT0zNNZPYWHgCdeZgIMLhkQknDh1\nw741QTZQw4Z66FjI/ZN1OxWbWQKBgQDB7l3WbbfyubaAZIUGSFEeQAf1Mom0VMMb\nnmU4eq/hcMrB6vjq3zNSerRL8d1fpgNY59MfLhLDrv1FVBTI5LkfS0o7Casp5pB6\nG66Gav/tKZSXbWAp7NnkSqObzDl85UmLEe3ay1kOyYe8AZOFnFlcFVracCMXm0YB\nd8wk2JcKiwKBgCvHo8f8CNK8+d+/+cDwO5J980R2yW7RLX0DLzRpXk5T2avK8RDT\nlJdDcU1cYUfS0InFujh9uw5gx8vwSShi2NquJR/2xZ1t78+3xiU8UyNdoVY8zPX+\nQ2BrTvUiJOGXBVsrNQdYv8vdvqwoA9beayqQixsyCpKWP9U3snUEn6RxAoGBAK3e\nTOlDo0kN8a648H7KdVe+pqPR9J3l5KstXqi9blSbsF0dkp/ZDwVil6UDKqtnhta9\nuY3Z297vU4lFsgDO954z/VBjAb9mRKAFk3pWEjAKOHtvB2lvPYcs1/SFrADq/P2f\nTHX+HFFio7wOWbnPjFo/lx4CraOrhZ8pTbC3MuuzAoGBAI7GOI57hFeJBH7Rjdad\noPpUC7tTsH55fSl6RUKKL4g1FzAq4Xe1iX2xcJN/hImBsmR7KP8D/9JWG0eFS9lb\niMYTMJNyGCWsyfh9hNKwhf7avzgOUP3xwY+tHSpz6RR25J/VdoihTipFvJWovjVh\nEJHHaZxjJLiKYO/K+//CfnHW\n-----END PRIVATE KEY-----\n', 'client_email': 'firebase-adminsdk-xgail@gpt-project-f5c3a.iam.gserviceaccount.com', 'client_id': '117504497411375484466', 'auth_uri': 'https://accounts.google.com/o/oauth2/auth', 'token_uri': 'https://oauth2.googleapis.com/token', 'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs', 'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xgail%40gpt-project-f5c3a.iam.gserviceaccount.com', 'universe_domain': 'googleapis.com' }",
  // },
};

module.exports = nextConfig;
