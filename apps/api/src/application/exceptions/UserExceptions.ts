export class UserNotFound extends Error {
  name = "UserNotFound";
}

export class EmailAlreadyExists extends Error {
  name = "EmailAlreadyExists";
}

export class PasswordMissing extends Error {
  name = "PasswordMissing";
}

export class EmailMissing extends Error {
  name = "PasswordMissing";
}

export class InvalidPassword extends Error {
  name = "InvalidPassword";
}
