function UnauthorizedAlert() {
  if (window.confirm('Unauthorized Action. Redirect to Login Page?')) {
    window.location = '/#/login';
  }
}

export default UnauthorizedAlert;