

export function getLoginMap(handleChange, errorMessage, inputValue) {
    const inputs = [
        {id:1,type:"text", label:"Email", placeholder:"Email", name:"email", onChange: handleChange, error: errorMessage.email, value:inputValue.email },
        {id:2,type:"text", label:"Password", placeholder:"Password", name:"password", onChange: handleChange, error: errorMessage.password, value:inputValue.password},
      ];
      return inputs;
}


export function getRegisterMap(handleChange, errorMessage, inputValue) {
  const inputs = [
      {id:1,type:"text", label:"Email", placeholder:"Email", name:"email", onChange: handleChange, error: errorMessage.email, value:inputValue.email },
      {id:2,type:"text", label:"FirstName", placeholder:"FirstName", name:"firstName", onChange: handleChange, error: errorMessage.firstName, value:inputValue.firstName},
      {id:3,type:"text", label:"LastName", placeholder:"LastName", name:"lastName", onChange: handleChange, error: errorMessage.lastName, value:inputValue.lastName},
      {id:4,type:"number", label:"Age", placeholder:"Age", name:"age", onChange: handleChange, error: errorMessage.age, value:inputValue.age},
      {id:5,type:"password", label:"Password", placeholder:"Password", name:"password", onChange: handleChange, error: errorMessage.password, value:inputValue.password},
      {id:6,type:"password", label:"Confirm Password", placeholder:" Confirm Password", name:"confirmPassword", onChange: handleChange, error: errorMessage.confirmPassword, value:inputValue.confirmPassword},
    ];
    return inputs;
}