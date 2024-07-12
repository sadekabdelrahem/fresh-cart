import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";


export let matchPassword = (Control:AbstractControl):ValidationErrors | null =>{

    let {password , rePassword} = Control.value ;

    if(password==rePassword && password && rePassword)
    {
        return null ;
    }
    else
    {
        return {passwordMisMatch:true}
    }
    }


