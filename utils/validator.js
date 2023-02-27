import { setAlert, setUiKey } from "../store/actions";
import store from "../store"; // Access redux store data
/******************* 
@purpose : Form validation 
@Author : INIC
******************/
export default class Validator {
  /******************* 
  @purpose : Check Varios Validation
  @Parameter : {value, rules,name, max_file_size}
  @Author : INIC
  ******************/
  static check(value, name, max_file_size, rules = []) {
    let error = {};
    error.valid = true;
    if (rules.length) {
      for (var k in rules) {
        if (error.valid) {
          error = Validator[rules[k]](value, name, max_file_size);
        }
      }
      return error;
    }
    return error;
  }
  /******************* 
  @purpose : Check Object Is Valid or not
  @Parameter : {underValidate}
  @Author : INIC
  ******************/
  static checkObject(underValidate) {
    return Object.keys(underValidate).reduce((obj, key) => {
      if (!underValidate[key].valid) {
        obj[key] = underValidate[key].message;
      }
      return obj;
    }, {});
  }
  /******************* 
  @purpose : Show Alert Notification
  @Parameter : {text, level}
  @Author : INIC
  ******************/
  static showAlert(text, level) {
    store.dispatch(setAlert(text, level));
  }
  /******************* 
  @purpose : Check Data Is Valid
  @Parameter : {underValidate}
  @Author : INIC
  ******************/
  static isValid(underValidate) {
    const inValid = checkObject(underValidate);
    store.dispatch(setUiKey("inValid", inValid));
    if (!Object.keys(inValid).length) {
      Validator.reset();
    }
    return !Object.keys(inValid).length;
  }
  /******************* 
  @purpose : If Object Is Valid
  @Parameter : {underValidate}
  @Author : INIC
  ******************/
  static getInvalidObject(underValidate) {
    const inValid = checkObject(underValidate);
    if (!Object.keys(inValid).length) {
      Validator.reset();
    }
    return Object.keys(inValid).length ? inValid : false;
  }
  /******************* 
  @purpose : Set Data InValid
  @Parameter : {validateObj}
  @Author : INIC
  ******************/
  static setInvalid(validateObj) {
    const temp = Object.keys(validateObj).reduce((obj, key) => {
      obj[key] = validateObj[key][0];
      return obj;
    }, {});
    store.dispatch(setUiKey("inValid", temp));
  }
  /******************* 
  @purpose : Reset All Validation
  @Parameter : {}
  @Author : INIC
  ******************/
  static reset() {
    store.dispatch(setUiKey("inValid", {}));
  }
  /******************* 
  @purpose : Required Data Validation
  @Parameter : {value, name}
  @Author : INIC
  ******************/
  static required(value, name) {
    if (
      value === undefined ||
      value === null ||
      value === "" ||
      (value instanceof Array && !value.length) ||
      value === false ||
      typeof value === "undefined"
    ) {
      // this.showAlert(name + ' is required', 'error')
      return { valid: false, message: name + " is required" };
    }
    return { valid: true, message: "" };
  }
  /******************* 
    @purpose : Email Validation
    @Parameter : {value, name}
    @Author : INIC
    ******************/
  static email(value, name) {
    if (/\S+@\S+\.\S+/.test(value)) {
      return { valid: true, message: "" };
    }
    // this.showAlert(name + ' is incorrect', 'error')
    return { valid: false, message: name + " is incorrect" };
  }
  /******************* 
  @purpose : File Validation
  @Parameter : {files, name, max_file_size}
  @Author : INIC
  ******************/
  static file = (files, name, max_file_size = 50) => {
    if (files.length > 0) {
      for (let element of files) {
        let file = Math.round(element.size / 1024);
        if (file >= max_file_size * 1024) {
          return {
            valid: false,
            message:
              name +
              " size is too Big, please select a file less than " +
              max_file_size +
              "MB",
          };
        }
      }
    }
    return { valid: true, message: "" };
  };
  /******************* 
  @purpose :  String Validation
  @Parameter : {value, name}
  @Author : INIC
  ******************/
  static string(value, name) {
    if (typeof value === "string") {
      return 1;
    }
    this.showAlert(name + " must be string", "error");
    return 0;
  }
  /******************* 
  @purpose : Alphabet Validation
  @Parameter : {value, name}
  @Author : INIC
    ******************/
  static alphabet(value, name) {
    let letters = /^[\sA-Za-z]+$/;
    if (value.match(letters)) {
      return 1;
    }
    this.showAlert(name + " must be alphabet characters only", "error");
    return 0;
  }
  /******************* 
    @purpose : Array Validation
    @Parameter : {value, name}
    @Author : INIC
    ******************/
  static reqiredArray(value, name) {
    if (!value.length) {
      this.showAlert(name + " is required", "error");
      return 0;
    }
    return 1;
  }
  /******************* 
  @purpose : Checkbox Validation
  @Parameter : {value, name}
  @Author : INIC
  ******************/
  static checked(value, name) {
    if (!value) {
      this.showAlert("You must agree " + name, "error");
      return 0;
    }
    return 1;
  }
  /******************* 
  @purpose : Integer Validation
  @Parameter : {value, name}
  @Author : INIC
  ******************/
  static integer(value, name) {
    if (!Number.isInteger(Number(value))) {
      this.showAlert(name + " is incorrect", "error");
      return 0;
    }
    return 1;
  }
  /******************* 
  @purpose : Phone Validation
  @Parameter : {value, name}
  @Author : INIC
  ******************/
  static phone(value, name) {
    let temp = value;
    if (temp.indexOf("+") === 0) {
      temp = value.replace("+", "");
    }
    if (!Number.isInteger(Number(temp)) || temp * 1 < 0) {
      return { valid: false, message: name + " is incorrect" };
    }
    return { valid: true, message: "" };
  }
}
