import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  status:boolean=false
  profilePicture="https://tse3.mm.bing.net/th?id=OIP.ePTBsw0y7DRxaM6p0bw1HQHaHa&pid=Api&P=0&h=220"
  adminData:any={}

  constructor (private api:ApiService , private toastr:ToastrService , private router:Router){}


  ngOnInit(): void {

    this.api.getAdmin().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.adminData=res
        if(res.profile){
        this.profilePicture=res.profile
        }
        
      }
    })
    
  }

  getFile(e:any){
    const file=e.target.files[0]
    const fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event.target.result)
      this.adminData.profile=event.target.result
      this.profilePicture=event.target.result
      
    }
  }



handleUpdate(){
  console.log(this.adminData)
  this.api.updateAdmin(this.adminData).subscribe({
    next:(res:any)=>{
     console.log(res);
     this.toastr.success("Admine Profile Updated")
     this.router.navigateByUrl('')
     
    },
    error:(err:any)=>{
      console.log(err);
      this.toastr.error("Admin Profile Updation Failed")
      
    }
  })
  
}






  editButton(){
    this.status=true
  }

  cancelButton(){
    this.status=false
  }

}
