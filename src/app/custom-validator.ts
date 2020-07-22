import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    
    static year(c: FormControl): ValidationErrors{
        var errorMsg;
        if(c.value > 2017){
         errorMsg= "The year must be less than 2017";
        }
        return errorMsg;
    }
}
