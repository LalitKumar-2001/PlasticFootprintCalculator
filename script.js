//SELECTORS



let pet_op=document.getElementById("time1");
let plas_op=document.querySelector("#time2");
let foodWrp_op=document.querySelector("#time3");
let ygt_op=document.querySelector("#time4");
let cs_op=document.querySelector("#time5");
let det_op=document.querySelector("#time6");
let shmp_op=document.querySelector("#time7");
let ref_op=document.querySelector("#time8");
let tb_op=document.querySelector("#time9");
let tp_op=document.querySelector("#time10");
let pb_op=document.querySelector("#time11");
let pc_op=document.querySelector("#time12");
let str_op=document.querySelector("#time13");
let disp_op=document.querySelector("#time14");
let amount_op=document.querySelector("#amount");
let other_op=document.querySelector("#time15");

calc.addEventListener("click",()=>{
    let pet_op_value=pet_op.selectedIndex;
    let plas_op_value=plas_op.selectedIndex;
    let  foodWrp_op_value= foodWrp_op.selectedIndex;
    let ygt_op_value=ygt_op.selectedIndex;
    let cs_op_value=cs_op.selectedIndex;
    let det_op_value=det_op.selectedIndex;
    let shmp_op_value=shmp_op.selectedIndex;
    let ref_op_value=ref_op.selectedIndex;
    let tb_op_value=tb_op.selectedIndex;
    let tp_op_value=tp_op.selectedIndex;
    let pb_op_value=pb_op.selectedIndex;
    let pc_op_value=pc_op.selectedIndex;
    let str_op_value=str_op.selectedIndex;
    let disp_op_value=disp_op.selectedIndex;
    let amount_op_value=amount_op.selectedIndex;
    let pet_sum;let plastic_sum;let foodWrp_sum;let ygrt_sum;
    let cs_sum;let det_sum;let shm_sum;let ref_sum;let tb_sum;let tp_sum;
    let pb_sum;let pc_sum;
    ////PET BOTTLES
    if(pet_op_value==0){
         pet_sum=(pet_bot.value)*365;
    }
    else if(pet_op_value==1){
        pet_sum=(pet_bot.value)*52;
    } 
    else if(pet_op_value==2){
        pet_sum=(pet_bot.value)*12;
    }   
    else if(pet_op_value==3){
        pet_sum=(pet_bot.value)*4;
    }
    else if(pet_op_value==4){
        pet_sum=(pet_bot.value)*2;
    }
    else{
        pet_sum=pet_bot.value;
    }

    ////PLASTIC BAGS
    if(plas_op_value==0){
        plastic_sum=(plastc_bags.value)*365;
   }
   else if(plas_op_value==1){
       plastic_sum=(plastc_bags.value)*52;
   } 
   else if(plas_op_value==2){
       plastic_sum=(plastc_bags.value)*12;
   }   
   else if(plas_op_value==3){
       plastic_sum=(plastc_bags.value)*4;
   }
   else if(plas_op_value==4){
       plastic_sum=(plastc_bags.value)*2;
   }
   else{
       plastic_sum=plastc_bags.value;
   }

   ////FOOD WRAPPERS
    if( foodWrp_op_value==0){
        foodWrp_sum=(food_wrps.value)*365;
    }
    else if(plas_op_value==1){
    foodWrp_sum=(food_wrps.value)*52;
    } 
    else if(plas_op_value==2){
    foodWrp_sum=(food_wrps.value)*12;
    }   
    else if(plas_op_value==3){
    foodWrp_sum=(food_wrps.value)*4;
    }
    else if(plas_op_value==4){
    foodWrp_sum=(food_wrps.value)*2;
    }
    else{
        foodWrp_sum=food_wrps.value;
    }

    ///YOGURT CONTAINERS
    if(ygt_op_value==0){
        ygrt_sum=(yog_cont.value)*365;
    }
    else if(ygt_op_value==1){
    ygrt_sum=(yog_cont.value)*52;
    } 
    else if(ygt_op_value==2){
    ygrt_sum=(yog_cont.value)*12;
    }   
    else if(ygt_op_value==3){
    ygrt_sum=(yog_cont.value)*4;
    }
    else if(ygt_op_value==4){
    ygrt_sum=(yog_cont.value)*2;
    }
    else{
        ygrt_sum=yog_cont.value;
    }

    //COTTON SWABS
    if( cs_op_value==0){
        cs_sum=(ctn_swb.value)*365;
    }
    else if( cs_op_value==1){
    cs_sum=(ctn_swb.value)*52;
    } 
    else if( cs_op_value==2){
    cs_sum=(ctn_swb.value)*12;
    }   
    else if( cs_op_value==3){
    cs_sum=(ctn_swb.value)*4;
    }
    else if( cs_op_value==4){
    cs_sum=(ctn_swb.value)*2;
    }
    else{
        cs_sum=ctn_swb.value;
    }

    //DETERGENT
    if( det_op_value==0){
        det_sum=(detergent.value)*365;
    }
    else if( det_op_value==1){
    det_sum=(detergent.value)*52;
    } 
    else if( det_op_value==2){
    det_sum=(detergent.value)*12;
    }   
    else if( det_op_value==3){
    det_sum=(detergent.value)*4;
    }
    else if( det_op_value==4){
    det_sum=(detergent.value)*2;
    }
    else{
        det_sum=detergent.value;
    }

    //SHAMPOO
    if( shmp_op_value==0){
        shm_sum=(shampo.value)*365;
    }
    else if( shmp_op_value==1){
    shm_sum=(shampo.value)*52;
    } 
    else if( shmp_op_value==2){
    shm_sum=(shampo.value)*12;
    }   
    else if( shmp_op_value==3){
    shm_sum=(shampo.value)*4;
    }
    else if( shmp_op_value==4){
    shm_sum=(shampo.value)*2;
    }
    else{
        shm_sum=shampo.value;
    }

    //REFILL PACKETS
    if( ref_op_value==0){
        ref_sum=(refill.value)*365;
    }
    else if( ref_op_value==1){
    ref_sum=(refill.value)*52;
    } 
    else if( ref_op_value==2){
    ref_sum=(refill.value)*12;
    }   
    else if( ref_op_value==3){
    ref_sum=(refill.value)*4;
    }
    else if( ref_op_value==4){
    ref_sum=(refill.value)*2;
    }
    else{
        ref_sum=refill.value;
    }

    //TOOTHBRUSHES
    if( tb_op_value==0){
        tb_sum=(tb.value)*365;
    }
    else if( tb_op_value==1){
    tb_sum=(tb.value)*52;
    } 
    else if( tb_op_value==2){
    tb_sum=(tb.value)*12;
    }   
    else if( tb_op_value==3){
    tb_sum=(tb.value)*4;
    }
    else if( tb_op_value==4){
    tb_sum=(tb.value)*2;
    }
    else{
        tb_sum=tb.value;
    }

    //TOOTHPASTE
    if( tp_op_value==0){
        tp_sum=(tp.value)*365;
    }
    else if( tp_op_value==1){
    tp_sum=(tp.value)*52;
    } 
    else if( tp_op_value==2){
    tp_sum=(tp.value)*12;
    }   
    else if( tp_op_value==3){
    tp_sum=(tp.value)*4;
    }
    else if( tp_op_value==4){
    tp_sum=(tp.value)*2;
    }
    else{
        tp_sum=tp.value;
    }

    //TAKEWAY PLASTIC BOXES
    if( pb_op_value==0){
        pb_sum=(pb.value)*365;
    }
    else if( pb_op_value==1){
    pb_sum=(pb.value)*52;
    } 
    else if( pb_op_value==2){
    pb_sum=(pb.value)*12;
    }   
    else if( pb_op_value==3){
    pb_sum=(pb.value)*4;
    }
    else if( pb_op_value==4){
    pb_sum=(pb.value)*2;
    }
    else{
        pb_sum=pb.value;
    }

    //TAKEWAY PLASTIC CUPS
    if( pc_op_value==0){
        pc_sum=(pc.value)*365;
    }
    else if( pc_op_value==1){
    pc_sum=(pc.value)*52;
    } 
    else if( pc_op_value==2){
    pc_sum=(pc.value)*12;
    }   
    else if( pc_op_value==3){
    pc_sum=(pc.value)*4;
    }
    else if( pc_op_value==4){
    pc_sum=(pc.value)*2;
    }
    else{
        pc_sum=pb.value;
    }


    //STRAWS
    if( str_op_value==0){
        straw_sum=(straw.value)*365;
    }
    else if( str_op_value==1){
    straw_sum=(straw.value)*52;
    } 
    else if( str_op_value==2){
    straw_sum=(straw.value)*12;
    }   
    else if( str_op_value==3){
    straw_sum=(straw.value)*4;
    }
    else if( str_op_value==4){
    straw_sum=(straw.value)*2;
    }
    else{
        straw=pb.value;
    }


    // console.log(pet_sum);
   
})
