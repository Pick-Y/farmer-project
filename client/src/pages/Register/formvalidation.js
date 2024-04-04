export const formvalidation = (
  firstname,
  lastname,
  age,
  nationality,
  email,
  visa,
  education,
  relationship,
  password,
  confirmpassword
) => {
  let errors = {}

  if (!firstname) {
    errors.firstname = 'First name is required'
  } else if (firstname.length > 10) {
    errors.firstname = 'Maximum length 10 characters'
  }

  if (!lastname) {
    errors.lastname = 'Last name is required'
  } else if (lastname.length > 10) {
    errors.lastname = 'Maximum length 10 characters'
  }

  if (!dob) {
    errors.dob = 'Date of birth is required'
  }

  if (!nationality) {
    errors.nationality = 'Nationality is required'
  }

  if (!email) {
    errors.email = 'Email cannot be empty'
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = 'You must add a valid email address. ex: george@myemail.com'
  }

  if (!visa) {
    errors.visa = 'Visa is required'
  }

  if (!education) {
    errors.education = 'Education is required'
  }

  if (!relationship) {
    errors.relationship = 'Relationship is required'
  }

  if (!password) {
    errors.password = 'Password is required'
  }

  if (!confirmpassword) {
    errors.confirmpassword = 'Please confirm password'
  } else if (confirmpassword !== password) {
    errors.confirmpassword = "Password don't match"
  }

  return errors
}

export const formvalidationFarmer = (
  companyname,
  address,
  suburb,
  state,
  nationality,
  email,
  visa,
  education,
  relationship,
  password,
  confirmpassword
) => {
  let errors = {}

  if (!companyname) {
    errors.companyname = 'Company name is required'
  } else if (companyname.length > 10) {
    errors.companyname = 'Maximum length 10 characters'
  }

  if (!address) {
    errors.address = 'Address is required'
  }

  if (!suburb) {
    errors.suburb = 'Suburb is required'
  }

  if (!state) {
    errors.state = 'State is required'
  }

  if (!nationality) {
    errors.nationality = 'Nationality is required'
  }

  if (!email) {
    errors.email = 'Email cannot be empty'
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = 'You must add a valid email address. ex: george@myemail.com'
  }

  if (!visa) {
    errors.visa = 'Visa is required'
  }

  if (!education) {
    errors.education = 'Education is required'
  }

  if (!relationship) {
    errors.relationship = 'Relationship is required'
  }

  if (!password) {
    errors.password = 'Password is required'
  }

  if (!confirmpassword) {
    errors.confirmpassword = 'Please confirm password'
  } else if (confirmpassword !== password) {
    errors.confirmpassword = "Password don't match"
  }

  return errors
}
