# Install

npm i ngx-auto-textarea 

## import 

    @NgModule({
      declarations: [
      ],
      imports: [
        NgxAutoTextareaModule
      ],
      providers: [
        
      ],
      bootstrap: []
    })

## use selector
  
    <lib-ngx-auto-textarea [maxLength]="100"></lib-ngx-auto-textarea>

## or use directive

    <textarea name="" id="" cols="30" rows="10" libNgxAutoTextarea [maxLength]="10"></textarea>
