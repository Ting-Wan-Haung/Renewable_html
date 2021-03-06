var  Home_page = {
    template:'#home_page',
    data() {
        return {
            cname:user_name,
            log_status:'log out'
        }
    },
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_name)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        }
        
    },
}
var user_account_chk = window.sessionStorage.getItem("user_account",JSON.stringify(Object));
var user_name = window.sessionStorage.getItem("user_name",JSON.stringify(Object));
var Login_page = {
    template:"#login_page",
    data() {
        return {
            S_Account:'',
            S_Password:'',
            cname:user_name,
            user_status:''
        }
    },
    methods:{
        login_evt(){
            const register_data = {
                S_Account:this.S_Account,
                S_Password:this.S_Password,
            };
            axios.post('http://122.116.217.115:6150/User/Login/V1',register_data)
            .then(response=>{
                let data = response.data;
                console.log(data[0].status);
                if(data[0].status === 'Login_01'){
                    this.user_status = '???????????????'
                }else if(data[0].status === 'Login_02'){
                    this.user_status = '????????????'
                }else{
                    router.push('/');
                    window.sessionStorage.setItem("user_account",this.S_Account);
                    window.sessionStorage.setItem("user_name",data[0].S_Username);
                    setTimeout(function(){location.reload()},500);
                }
                
            }).catch(err=>{
                console.log(err);
            })
        },
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        }
        
    },
}
var user_new = window.sessionStorage.getItem("user_new",JSON.stringify(Object));
var Register_page = {
    template:"#register_page",
    data(){
        return{
            S_First_Name:'',
            S_Last_Name:'',
            S_Account:'',
            rules: [
                { message: "One lowercase letter required.", regex: /[a-z]+/ },
                { message: "One uppercase letter required.", regex: /[A-Z]+/ },
                { message: "8 characters minimum.", regex: /.{8,}/ },
                { message: "One number required.", regex: /[0-9]+/ }],
          
                S_Password: "",
                S_Repassword: "",
                passwordVisible: false,
                submitted: false ,
                test:null,
                cname:user_name,
                condition_err:''
        }
    },
    
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_new
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_new)
            if(user_new != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        resetPasswords() {
            this.S_Password = "";
            this.S_Repassword = "";
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
            }, 2000);
        },
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
        }, 
        continue_register(){
            axios.post('http://122.116.217.115:6150/User/Register/V1',{
                S_First_Name:this.S_First_Name,
                S_Last_Name:this.S_Last_Name,
                S_Account:this.S_Account,
                S_Password:this.S_Password,
                S_Repassword:this.S_Repassword,
            })
            .then(response=>{
                let data = response.data
                console.log(data);
                console.log(this.S_Account);
                if(response.data[0].status === 'Signup_01'){
                    this.condition_err = '???????????????'
                }else{
                    window.sessionStorage.setItem("user_new",this.S_Account);
                    router.push('/userset');
                }
            }).catch(err=>{
                console.log(err);
            })

            
        },
    },
    computed: {
        notSamePasswords() {
          if (this.passwordsFilled) {
            return this.S_Password !== this.S_Repassword;
          } else {
            return false;
          }
        },
        passwordsFilled() {
          return this.S_Password !== "" && this.S_Repassword !== "";
        },
        passwordValidation() {
          let errors = [];
          for (let condition of this.rules) {
            if (!condition.regex.test(this.S_Password)) {
              errors.push(condition.message);
            }
          }
          if (errors.length === 0) {
            return { valid: true, errors };
          } else {
            return { valid: false, errors };
          }
        } }
}

var User_set_page = {
    template:'#user_set_page',
    data() {
        return {
            S_Username:'',
            I_Sex:1,
            D_Birthday:'',
            S_Phone:'',
            S_Company_Name:'',
            S_Company_Address:'',
            S_Verify_Code:'',
            cname:user_name,
            userset_status:''
        }
    },
    
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        saveDataToServer:function(){
            var D_Birthday = this.backEndDteFormat(this.D_Birthday);
            if(D_Birthday === "Invalid date"){
                alert("??????????????????");
            }else{
                const register_data = {
                    S_Account:user_new,
                    S_Username:this.S_Username,
                    I_Sex:this.I_Sex,
                    D_Birthday:D_Birthday,
                    S_Phone:this.S_Phone,
                    S_Company_Name:this.S_Company_Name,
                    S_Company_Address:this.S_Company_Address,
                    S_Verify_Code:this.S_Verify_Code,
                };
                axios.post('http://122.116.217.115:6150/User/Verify/V1',register_data)
                .then(response=>{
                    console.log(response.data);
                    if(response.data[0].status==='Verify_01'){
                        this.userset_status = '?????????????????????'
                    }else if(response.data[0].status==='Verify_02'){
                        this.userset_status = '???????????????'
                    }else{
                        router.push('/');
                    }
                    
                }).catch(err=>{
                    console.log(err);
                })
                 
            }
            
        },
        backEndDteFormat:function(D_Birthday){
            return moment(D_Birthday,'YYYY/MM/DD').format('YYYY-MM-DD')
        }

        
    },
}
var Profile_page = {
    template:'#profile_page',
    data() {
        return {
            userInfo:[],
            cname:user_name
        }
    },
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        profile_update(){
            const profile_data = {
                S_Username:user_name,
                S_Password:this.userInfo[0].Profile_Data[0].S_Password,
                S_Phone:this.userInfo[0].Profile_Data[0].S_Phone
            };
            axios.post('http://122.116.217.115:6150/User/Profile/Update/V1',profile_data)
            .then(response=>{
                console.log(response);
                alert("Save");
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    mounted() {
        fetch('http://122.116.217.115:6150/User/Profile/'+user_name+'/V1')
        .then(response => response.json())
        .then(userInfo => {
            this.userInfo = userInfo
            console.log(this.userInfo[0].Profile_Data[0].S_Password)
        })
        .catch(function(err){  
            console.log(err);
        })
    },
}
var station_data = Vue.component('station_data', {
    data(){
        return{
            station_lists:[],
            input: {
                S_Station_Name: '??????',
                S_Station_Id: 'Z101'
            },
            energy:''
        }
    },
    template: `
          <div class="station_info">
            <div class="info_title">
                <label>????????????</label>
                <div id="select_station_list">
                    <select id="station" class="select_option" v-model="input.S_Station_Name">
                        <option :value="null">????????????</option>
                        <option :value="item" v-for="item in typeList.sort"">{{item}}</option>
                    </select>
                    <select id="windmachine" class="select_option" v-model="input.S_Station_Id">
                        <option :value="null">??????ID</option>
                        <option :value="item" v-for="item in titleList.sort">{{item}}</option>
                    </select>
                </div>
            </div>
            <div class="info_content" >
                <div id="info_subcontain">
                    <div class="subtitle">
                        <label>????????????</label>
                        <div class="caseInfo" v-if="content">
                            <label>????????????:</label>
                            <div class="case_name">
                                {{ input.S_Station_Name }}
                            </div>
                            <label>??????:</label>
                            <div class="case_name">
                                {{ content.S_Station_Road }}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info_subcontain">
                    <div class="subtitle">
                        <label>??????????????????</label>
                        <div class="caseInfo" v-if="content">
                            <label>???????????????:</label>
                            <div class="case_name">
                            {{ content.I_Generator_Number }}???
                            </div>
                            <label>???????????????:</label>
                            <div class="case_name">
                            {{ content.I_Gateway_Number }}???
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info_subcontain">
                    <div class="subtitle">
                        <label>????????????</label>
                        <div class="caseInfo" v-if="content">
                            <label>????????????:</label>
                            <div class="case_name">
                                {{ content.DT_Station_On }}
                                
                            </div>
                            <label>????????????:</label>
                            <div class="case_name" @change="energy_type">
                                {{ energy }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    `,
    computed:{
        typeList(){
            let obj = {
                sort:[],
                map:{}
            }
            this.station_lists.forEach(({S_Station_Name, S_Station_Id, S_Station_Road, I_Generator_Number, I_Gateway_Number, DT_Station_On}, index) =>{
                console.log()
                if(!obj.map[S_Station_Name]){
                    obj.sort.push(S_Station_Name)
                    obj.map[S_Station_Name] = {
                        sort: [],
                        map: {}
                    }
                }
                obj.map[S_Station_Name].sort.push(S_Station_Id)
                obj.map[S_Station_Name].map[S_Station_Id] = {S_Station_Road, I_Generator_Number, I_Gateway_Number, DT_Station_On, index}
            })
            return obj
        },
        titleList(){
            // this.input.S_Station_Name = null
            if(this.input.S_Station_Name){
                return this.typeList.map[this.input.S_Station_Name]
            }else{
                return []
            }
        },
        content(){
            if(this.input.S_Station_Id){
                return this.titleList.map[this.input.S_Station_Id]
            }else{
                return null
            }
        },
        energy_type(){
            if(this.station_lists[0].I_Energy === 1){
                this.energy = '????????????'
            }
            else{
                this.energy = '???????????????'
            }
        }
    },
    mounted() {
        fetch('http://122.116.217.115:6150/Station/List/'+user_name+'/V1')
        .then(response => response.json())
        .then(station_lists => {
            this.station_lists = station_lists
            console.log(this.station_lists)
        })
        .catch(function(err){  
            console.log(err);
        })
    },
})
var machine_apply = Vue.component('machine_apply', {
    data() {
        return {
            I_Gateway_Number:0,
            I_Generator_Number:0,
            station_lists:[],
            input: {
                S_Station_Name: '??????',
                S_Station_Id: 'Z101',
            },
              nowDate: "",    // ????????????
              nowWeek: "",    // ????????????
              energy:''
        }
    },
    template: `
    <div class="station_info">
    <div class="info_title">
        <label>????????????</label>
        <div id="select_station_list">
            <select id="station" class="select_option" v-model="input.S_Station_Name">
                <option value="">????????????</option>
                <option :value="item" v-for="item in typeList.sort">{{item}}</option>
            </select>
            <select id="windmachine"  class="select_option" v-model="input.S_Station_Id">
                <option value="">??????ID</option>
                <option :value="item" v-for="item in titleList.sort">{{item}}</option>
            </select>
        </div>
    </div>
    <div class="info_content">
        <div id="info_subcontain">
            <div class="subtitle">
                <label>????????????</label>
                <div class="caseInfo"v-if="content">
                    <label>????????????:</label>
                    <div class="case_name">
                        {{ content.S_Station_Name }}
                    </div>
                    <label>??????:</label>
                    <div class="case_name">
                        {{ content.S_Station_Road }}
                    </div>
                </div>
            </div>
        </div>
        <div id="info_subcontain">
            <div class="subtitle">
                <label>??????????????????</label>
                <div class="caseInfo" v-if="content">
                    <label>???????????????:</label>
                    <div class="case_name">
                        <input type="number" min="0" class="station_input" v-model="I_Generator_Number">
                    </div>
                    <label>???????????????:</label>
                    <div class="case_name">
                    <input type="number" min="0" class="station_input"v-model="I_Gateway_Number">
                    </div>
                </div>
            </div>
        </div>
        <div id="info_subcontain">
            <div class="subtitle">
                <label>????????????</label>
                <div class="caseInfo" v-if="content">
                    <label>????????????:</label>
                    <div class="case_name">
                    {{nowDate}}{{nowWeek}}
                    </div>
                    <label>????????????:</label>
                    <div class="case_name"@change = "energy_type">
                        {{ energy }}
                        <button id="station_apply_btn" @click="apply_station">??????</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  </div>
    `
    ,
    methods: {
        apply_station(){
            // console.log(this.input.S_Station_Id)
            const register_station = {
                S_Station_Id:this.input.S_Station_Id,
                I_Generator_Number:this.I_Generator_Number,
                I_Gateway_Number:this.I_Gateway_Number,
            };
            axios.post('http://122.116.217.115:6150/Station/Fan/Register/v1',register_station)
            .then(response=>{
                console.log(response);
                alert("?????????");
            }).catch(err=>{
                console.log(err);
                
            })
        },
        dealWithTime(data) { // ??????????????????
            let formatDateTime;
            let Y = data.getFullYear();
            let M = data.getMonth() + 1;
            let D = data.getDate();
            let H = data.getHours();
            let Min = data.getMinutes();
            let S = data.getSeconds();
            let W = data.getDay();
            H = H < 10 ? "0" + H : H;
            Min = Min < 10 ? "0" + Min : Min;
            S = S < 10 ? "0" + S : S;
            switch (W) {
              case 0:
                W = "???";
                break;
              case 1:
                W = "???";
                break;
              case 2:
                W = "???";
                break;
              case 3:
                W = "???";
                break;
              case 4:
                W = "???";
                break;
              case 5:
                W = "???";
                break;
              case 6:
                W = "???";
                break;
              default:
                break;
            }
            this.nowDate = Y + "???" + M + "???" + D + "??? ";
            this.nowWeek = "???" + W ; 
            this.nowTime = H + ":" + Min + ":" + S;
            // formatDateTime = Y + "???" + M + "???" + D + "??? " + " ???" +W + H + ":" + Min + ":" + S;
          },
    },
    mounted() {
        fetch('http://122.116.217.115:6150/Station/List/'+user_name+'/V1')
        .then(response => response.json())
        .then(station_lists => {
            this.station_lists = station_lists
            console.log(this.station_lists)
        })
        .catch(function(err){  
            console.log(err);
        })
        // ????????????????????????????????????
        this.dealWithTime(new Date())
    },
    computed:{
        typeList(){
            let obj = {
                sort:[],
                map:{}
            }
            this.station_lists.forEach(({S_Station_Name, S_Station_Id, S_Station_Road}, index) =>{
                if(!obj.map[S_Station_Name]){
                    obj.sort.push(S_Station_Name)
                    obj.map[S_Station_Name] = {
                        sort: [],
                        map: {}
                    }
                }
                obj.map[S_Station_Name].sort.push(S_Station_Id)
                obj.map[S_Station_Name].map[S_Station_Id] = {index, S_Station_Name, S_Station_Road}
            })
            return obj
        },
        titleList(){
            if(this.input.S_Station_Name){
                return this.typeList.map[this.input.S_Station_Name]
            }else{
                return []
            }
        },
        content(){
            if(this.input.S_Station_Id){
                return this.titleList.map[this.input.S_Station_Id]
            }else{
                return null
            }
        },
        energy_type(){
            if(this.station_lists[0].I_Energy === 1){
                this.energy = '????????????'
            }
            else{
                this.energy = '???????????????'
            }
        }
    },
    
})
Vue.component('select-compontent',{
    props: ['options', 'value'],
    template: `
      <select v-model="index">
        <option v-for="(item,i) in options" :value="i">
          {{item.name}}
        </option>
      </select>
    `,
    computed:{
      index:{
        get(){
          return this.value
        },
        set(index){
          this.$emit('input', index);
        }
      }
    }
  });
  const countries = [
    {
        name:'??????',
        zip:'886'
    }
  ];
  const cities = [
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '200' },
            { name: '?????????', zip: '201' },
            { name: '?????????', zip: '202' },
            { name: '?????????', zip: '203' },
            { name: '?????????', zip: '204' },
            { name: '?????????', zip: '205' },
            { name: '?????????', zip: '206' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '100' },
            { name: '?????????', zip: '103' },
            { name: '?????????', zip: '104' },
            { name: '?????????', zip: '105' },
            { name: '?????????', zip: '106' },
            { name: '?????????', zip: '108' },
            { name: '?????????', zip: '110' },
            { name: '?????????', zip: '111' },
            { name: '?????????', zip: '112' },
            { name: '?????????', zip: '114' },
            { name: '?????????', zip: '115' },
            { name: '?????????', zip: '116' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '207' },
            { name: '?????????', zip: '208' },
            { name: '?????????', zip: '220' },
            { name: '?????????', zip: '221' },
            { name: '?????????', zip: '222' },
            { name: '?????????', zip: '223' },
            { name: '?????????', zip: '224' },
            { name: '?????????', zip: '226' },
            { name: '?????????', zip: '227' },
            { name: '?????????', zip: '228' },
            { name: '?????????', zip: '231' },
            { name: '?????????', zip: '232' },
            { name: '?????????', zip: '233' },
            { name: '?????????', zip: '234' },
            { name: '?????????', zip: '235' },
            { name: '?????????', zip: '236' },
            { name: '?????????', zip: '237' },
            { name: '?????????', zip: '238' },
            { name: '?????????', zip: '239' },
            { name: '?????????', zip: '241' },
            { name: '?????????', zip: '242' },
            { name: '?????????', zip: '243' },
            { name: '?????????', zip: '244' },
            { name: '?????????', zip: '247' },
            { name: '?????????', zip: '248' },
            { name: '?????????', zip: '249' },
            { name: '?????????', zip: '251' },
            { name: '?????????', zip: '252' },
            { name: '?????????', zip: '253' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '320' },
            { name: '?????????', zip: '324' },
            { name: '?????????', zip: '325' },
            { name: '?????????', zip: '326' },
            { name: '?????????', zip: '327' },
            { name: '?????????', zip: '328' },
            { name: '?????????', zip: '330' },
            { name: '?????????', zip: '333' },
            { name: '?????????', zip: '334' },
            { name: '?????????', zip: '335' },
            { name: '?????????', zip: '336' },
            { name: '?????????', zip: '337' },
            { name: '?????????', zip: '338' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '300' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '302' },
            { name: '?????????', zip: '303' },
            { name: '?????????', zip: '304' },
            { name: '?????????', zip: '305' },
            { name: '?????????', zip: '306' },
            { name: '?????????', zip: '307' },
            { name: '?????????', zip: '308' },
            { name: '?????????', zip: '310' },
            { name: '?????????', zip: '311' },
            { name: '?????????', zip: '312' },
            { name: '?????????', zip: '313' },
            { name: '?????????', zip: '314' },
            { name: '?????????', zip: '315' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '350' },
            { name: '?????????', zip: '351' },
            { name: '?????????', zip: '352' },
            { name: '?????????', zip: '353' },
            { name: '?????????', zip: '354' },
            { name: '?????????', zip: '356' },
            { name: '?????????', zip: '357' },
            { name: '?????????', zip: '358' },
            { name: '?????????', zip: '360' },
            { name: '?????????', zip: '361' },
            { name: '?????????', zip: '362' },
            { name: '?????????', zip: '363' },
            { name: '?????????', zip: '364' },
            { name: '?????????', zip: '365' },
            { name: '?????????', zip: '366' },
            { name: '?????????', zip: '367' },
            { name: '?????????', zip: '368' },
            { name: '?????????', zip: '369' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '??????', zip: '400' },
            { name: '??????', zip: '401' },
            { name: '??????', zip: '402' },
            { name: '??????', zip: '403' },
            { name: '??????', zip: '404' },
            { name: '?????????', zip: '406' },
            { name: '?????????', zip: '407' },
            { name: '?????????', zip: '408' },
            { name: '?????????', zip: '411' },
            { name: '?????????', zip: '412' },
            { name: '?????????', zip: '413' },
            { name: '?????????', zip: '414' },
            { name: '?????????', zip: '420' },
            { name: '?????????', zip: '421' },
            { name: '?????????', zip: '422' },
            { name: '?????????', zip: '423' },
            { name: '?????????', zip: '424' },
            { name: '?????????', zip: '426' },
            { name: '?????????', zip: '427' },
            { name: '?????????', zip: '428' },
            { name: '?????????', zip: '429' },
            { name: '?????????', zip: '432' },
            { name: '?????????', zip: '433' },
            { name: '?????????', zip: '434' },
            { name: '?????????', zip: '435' },
            { name: '?????????', zip: '436' },
            { name: '?????????', zip: '437' },
            { name: '?????????', zip: '438' },
            { name: '?????????', zip: '439' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '500' },
            { name: '?????????', zip: '502' },
            { name: '?????????', zip: '503' },
            { name: '?????????', zip: '504' },
            { name: '?????????', zip: '505' },
            { name: '?????????', zip: '506' },
            { name: '?????????', zip: '507' },
            { name: '?????????', zip: '508' },
            { name: '?????????', zip: '509' },
            { name: '?????????', zip: '510' },
            { name: '?????????', zip: '511' },
            { name: '?????????', zip: '512' },
            { name: '?????????', zip: '513' },
            { name: '?????????', zip: '514' },
            { name: '?????????', zip: '515' },
            { name: '?????????', zip: '516' },
            { name: '?????????', zip: '520' },
            { name: '?????????', zip: '521' },
            { name: '?????????', zip: '522' },
            { name: '?????????', zip: '523' },
            { name: '?????????', zip: '524' },
            { name: '?????????', zip: '525' },
            { name: '?????????', zip: '526' },
            { name: '?????????', zip: '527' },
            { name: '?????????', zip: '528' },
            { name: '?????????', zip: '530' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '540' },
            { name: '?????????', zip: '541' },
            { name: '?????????', zip: '542' },
            { name: '?????????', zip: '544' },
            { name: '?????????', zip: '545' },
            { name: '?????????', zip: '546' },
            { name: '?????????', zip: '551' },
            { name: '?????????', zip: '552' },
            { name: '?????????', zip: '553' },
            { name: '?????????', zip: '555' },
            { name: '?????????', zip: '556' },
            { name: '?????????', zip: '557' },
            { name: '?????????', zip: '558' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '630' },
            { name: '?????????', zip: '631' },
            { name: '?????????', zip: '632' },
            { name: '?????????', zip: '633' },
            { name: '?????????', zip: '634' },
            { name: '?????????', zip: '635' },
            { name: '?????????', zip: '636' },
            { name: '?????????', zip: '637' },
            { name: '?????????', zip: '638' },
            { name: '?????????', zip: '640' },
            { name: '?????????', zip: '643' },
            { name: '?????????', zip: '646' },
            { name: '?????????', zip: '647' },
            { name: '?????????', zip: '648' },
            { name: '?????????', zip: '649' },
            { name: '?????????', zip: '651' },
            { name: '?????????', zip: '652' },
            { name: '?????????', zip: '653' },
            { name: '?????????', zip: '654' },
            { name: '?????????', zip: '655' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '600' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '602' },
            { name: '?????????', zip: '603' },
            { name: '?????????', zip: '604' },
            { name: '?????????', zip: '605' },
            { name: '?????????', zip: '606' },
            { name: '?????????', zip: '607' },
            { name: '?????????', zip: '608' },
            { name: '?????????', zip: '611' },
            { name: '?????????', zip: '612' },
            { name: '?????????', zip: '613' },
            { name: '?????????', zip: '614' },
            { name: '?????????', zip: '615' },
            { name: '?????????', zip: '616' },
            { name: '?????????', zip: '621' },
            { name: '?????????', zip: '622' },
            { name: '?????????', zip: '623' },
            { name: '?????????', zip: '624' },
            { name: '?????????', zip: '625' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '700' },
            { name: '??????', zip: '701' },
            { name: '??????', zip: '702' },
            { name: '??????', zip: '704' },
            { name: '?????????', zip: '708' },
            { name: '?????????', zip: '709' },
            { name: '?????????', zip: '710' },
            { name: '?????????', zip: '711' },
            { name: '?????????', zip: '712' },
            { name: '?????????', zip: '713' },
            { name: '?????????', zip: '714' },
            { name: '?????????', zip: '715' },
            { name: '?????????', zip: '716' },
            { name: '?????????', zip: '717' },
            { name: '?????????', zip: '718' },
            { name: '?????????', zip: '719' },
            { name: '?????????', zip: '720' },
            { name: '?????????', zip: '721' },
            { name: '?????????', zip: '722' },
            { name: '?????????', zip: '723' },
            { name: '?????????', zip: '724' },
            { name: '?????????', zip: '725' },
            { name: '?????????', zip: '726' },
            { name: '?????????', zip: '727' },
            { name: '?????????', zip: '730' },
            { name: '?????????', zip: '731' },
            { name: '?????????', zip: '732' },
            { name: '?????????', zip: '733' },
            { name: '?????????', zip: '734' },
            { name: '?????????', zip: '735' },
            { name: '?????????', zip: '736' },
            { name: '?????????', zip: '737' },
            { name: '?????????', zip: '741' },
            { name: '?????????', zip: '742' },
            { name: '?????????', zip: '743' },
            { name: '?????????', zip: '744' },
            { name: '?????????', zip: '745' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '800' },
            { name: '?????????', zip: '801' },
            { name: '?????????', zip: '802' },
            { name: '?????????', zip: '803' },
            { name: '?????????', zip: '804' },
            { name: '?????????', zip: '805' },
            { name: '?????????', zip: '806' },
            { name: '?????????', zip: '807' },
            { name: '?????????', zip: '811' },
            { name: '?????????', zip: '812' },
            { name: '?????????', zip: '813' },
            { name: '?????????', zip: '814' },
            { name: '?????????', zip: '815' },
            { name: '?????????', zip: '820' },
            { name: '?????????', zip: '821' },
            { name: '?????????', zip: '822' },
            { name: '?????????', zip: '823' },
            { name: '?????????', zip: '824' },
            { name: '?????????', zip: '825' },
            { name: '?????????', zip: '826' },
            { name: '?????????', zip: '827' },
            { name: '?????????', zip: '828' },
            { name: '?????????', zip: '829' },
            { name: '?????????', zip: '830' },
            { name: '?????????', zip: '831' },
            { name: '?????????', zip: '832' },
            { name: '?????????', zip: '833' },
            { name: '?????????', zip: '840' },
            { name: '?????????', zip: '842' },
            { name: '?????????', zip: '843' },
            { name: '?????????', zip: '844' },
            { name: '?????????', zip: '845' },
            { name: '?????????', zip: '846' },
            { name: '?????????', zip: '847' },
            { name: '?????????', zip: '848' },
            { name: '????????????', zip: '849' },
            { name: '?????????', zip: '851' },
            { name: '?????????', zip: '852' },
            { name: '??????', zip: '817' },
            { name: '??????', zip: '819' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '900' },
            { name: '?????????', zip: '901' },
            { name: '?????????', zip: '902' },
            { name: '?????????', zip: '903' },
            { name: '?????????', zip: '904' },
            { name: '?????????', zip: '905' },
            { name: '?????????', zip: '906' },
            { name: '?????????', zip: '907' },
            { name: '?????????', zip: '908' },
            { name: '?????????', zip: '909' },
            { name: '?????????', zip: '911' },
            { name: '?????????', zip: '912' },
            { name: '?????????', zip: '913' },
            { name: '?????????', zip: '920' },
            { name: '?????????', zip: '921' },
            { name: '?????????', zip: '922' },
            { name: '?????????', zip: '923' },
            { name: '?????????', zip: '924' },
            { name: '?????????', zip: '925' },
            { name: '?????????', zip: '926' },
            { name: '?????????', zip: '927' },
            { name: '?????????', zip: '928' },
            { name: '?????????', zip: '929' },
            { name: '?????????', zip: '931' },
            { name: '?????????', zip: '932' },
            { name: '?????????', zip: '940' },
            { name: '?????????', zip: '941' },
            { name: '?????????', zip: '942' },
            { name: '?????????', zip: '943' },
            { name: '?????????', zip: '944' },
            { name: '?????????', zip: '945' },
            { name: '?????????', zip: '946' },
            { name: '?????????', zip: '947' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '950' },
            { name: '?????????', zip: '951' },
            { name: '?????????', zip: '952' },
            { name: '?????????', zip: '953' },
            { name: '?????????', zip: '954' },
            { name: '?????????', zip: '955' },
            { name: '?????????', zip: '956' },
            { name: '?????????', zip: '957' },
            { name: '?????????', zip: '958' },
            { name: '?????????', zip: '959' },
            { name: '?????????', zip: '961' },
            { name: '?????????', zip: '962' },
            { name: '?????????', zip: '963' },
            { name: '?????????', zip: '964' },
            { name: '?????????', zip: '965' },
            { name: '?????????', zip: '966' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '970' },
            { name: '?????????', zip: '971' },
            { name: '?????????', zip: '972' },
            { name: '?????????', zip: '973' },
            { name: '?????????', zip: '974' },
            { name: '?????????', zip: '975' },
            { name: '?????????', zip: '976' },
            { name: '?????????', zip: '977' },
            { name: '?????????', zip: '978' },
            { name: '?????????', zip: '979' },
            { name: '?????????', zip: '981' },
            { name: '?????????', zip: '982' },
            { name: '?????????', zip: '983' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '260' },
            { name: '?????????', zip: '261' },
            { name: '?????????', zip: '262' },
            { name: '?????????', zip: '263' },
            { name: '?????????', zip: '264' },
            { name: '?????????', zip: '265' },
            { name: '?????????', zip: '266' },
            { name: '?????????', zip: '267' },
            { name: '?????????', zip: '268' },
            { name: '?????????', zip: '269' },
            { name: '?????????', zip: '270' },
            { name: '?????????', zip: '272' },
            { name: '?????????', zip: '290' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '880' },
            { name: '?????????', zip: '881' },
            { name: '?????????', zip: '882' },
            { name: '?????????', zip: '883' },
            { name: '?????????', zip: '884' },
            { name: '?????????', zip: '885' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '?????????', zip: '890' },
            { name: '?????????', zip: '891' },
            { name: '?????????', zip: '892' },
            { name: '?????????', zip: '893' },
            { name: '?????????', zip: '894' },
            { name: '??????', zip: '896' },
        ],
        },
        {
        name: '?????????',
        areas: [
            { name: '??????', zip: '209' },
            { name: '??????', zip: '210' },
            { name: '??????', zip: '211' },
            { name: '??????', zip: '212' },
        ],
        },
  ];
var Station_apply_page = {
    template:'#station_apply_page',
    data(){
        return {
            cname:user_name,
            S_Station_Name:'',
            S_Station_Id:'',
            S_Station_Road:'????????????',
            I_Generator_Number:'',
            I_Gateway_Number:'',
            countryIdx: 0,
            cityIdx: 6,
            areaIdx: 0,
            selectName : '',
            selectVal : 1,
            energies : [
                {val:1,item:'????????????'},
                {val:2,item:'???????????????'},
            ]
        }
    },
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        apply_station(){
            console.log(this.areas[this.areaIdx].zip)
            console.log(this.countries[this.countryIdx].zip)
            console.log(this.selectVal)
            const register_station = {
                S_Username:user_name,
                S_Station_Name:this.S_Station_Name,
                S_Station_Id:this.S_Station_Id,
                I_Station_Country:this.countries[this.countryIdx].zip,
                I_Station_Area:this.areas[this.areaIdx].zip,
                S_Station_Road:this.S_Station_Road,
                I_Energy:this.selectVal,
                I_Generator_Number:this.I_Generator_Number,
                I_Gateway_Number:this.I_Gateway_Number,
            };
            axios.post('http://122.116.217.115:6150/Station/Register/V1',register_station)
            .then(response=>{
                console.log(response);
                alert("?????????");
                // setTimeout(function(){location.reload()},500);
            }).catch(err=>{
                console.log(err);
                
            })
        },
        updateVal(){
            let obj = document.getElementById('s_gender');
            this.selectVal = obj.value;
            this.selectName = obj.options[obj.selectedIndex].text;
        }
    },
    computed:{
        
        countries(){
            console.log(this.country)
        },
        countries(){
            return countries
        },
        cities(){
            return cities
        },
        areas(){
            return this.cities[this.cityIdx].areas
        },
        zip(){
            return this.areas[this.areaIdx].zip
        }
    },
    watch:{
        cityIdx(){
          this.areaIdx = 0;
        }
      },
}
var Station_list = {
    template:'#station_list',
    data() {
        return {
            station_content:'station_data',
            cname:user_name,
        }
    },
    
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
    },
}
var Facility_status = {
    template:'#facility_status',
    data() {
        return {
            cname:user_name,
            station_lists:[],
            input: {
                S_Station_Name: '??????',
                S_Station_Id: 'Z101',
            },
            facility_update:[],
        }
    },
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
    },
    mounted() {
        fetch('http://122.116.217.115:6150/Station/List/'+user_name+'/V1')
        .then(response => response.json())
        .then(station_lists => {
            this.station_lists = station_lists
            console.log(this.station_lists)
        })
        .catch(function(err){  
            console.log(err);
        })
        // ????????????????????????????????????
        this.dealWithTime(new Date())
    },
    computed:{
        typeList(){
            let obj = {
                sort:[],
                map:{}
            }
            this.station_lists.forEach(({S_Station_Name, S_Station_Id, S_Station_Road}, index) =>{
                if(!obj.map[S_Station_Name]){
                    obj.sort.push(S_Station_Name)
                    obj.map[S_Station_Name] = {
                        sort: [],
                        map: {}
                    }
                }
                obj.map[S_Station_Name].sort.push(S_Station_Id)
                obj.map[S_Station_Name].map[S_Station_Id] = {index, S_Station_Name, S_Station_Road}
            })
            return obj
        },
        titleList(){
            if(this.input.S_Station_Name){
                return this.typeList.map[this.input.S_Station_Name]
            }else{
                return []
            }
        },
        content(){
            const facility_data = {
                S_Station_Id:this.input.S_Station_Id
            }
            if(this.input.S_Station_Id){
                axios.post('http://122.116.217.115:6150/Station/Facility/V1',facility_data)
                .then(response => {
                    console.log(response);
                    this.facility_update = response.data[0].Facility_Update;
                })
                return this.titleList.map[this.input.S_Station_Id]
            }else{
                return null
            }
        },
    },
}
var one = 1;
var Report_page = {
    template:'#report_page',
    data() {
        return {
            user_name:user_name,
            station_lists:[],
            input:{
                S_Station_Name: '??????',
                S_Station_Id: 'Z101',
                S_Facility_Id: 'Z101_1',
            },
            power_general:[],
            now_reportData:[],
            year_reportData:[],
            month_reportData:[],
            day_reportData:[],
            nowDate:'',
            nowWeek:'',
            nowTime:'',
        }
    },
    mounted() {
        fetch('http://122.116.217.115:6150/Station/List/'+user_name+'/V1')
        .then(response => response.json())
        .then(station_lists => {
            this.station_lists = station_lists
            console.log(this.station_lists)
        })
        .catch(function(err){  
            console.log(err);
        })
        fetch('http://122.116.217.115:6150/Report/Hour/'+this.input.S_Facility_Id+'/V1')
        .then(response => response.json())
        .then(power_general => {
            this.power_general = power_general
            console.log(this.power_general)
        })
        .catch(function(err){  
            console.log(err);
        })  
    },
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        dealWithTime(data) { // ??????????????????
            let formatDateTime;
            let Y = data.getFullYear();
            let M = data.getMonth() + 1;
            let D = data.getDate();
            let H = data.getHours();
            let Min = data.getMinutes();
            let S = data.getSeconds();
            let W = data.getDay();
            H = H < 10 ? "0" + H : H;
            Min = Min < 10 ? "0" + Min : Min;
            S = S < 10 ? "0" + S : S;
            switch (W) {
              case 0:
                W = "???";
                break;
              case 1:
                W = "???";
                break;
              case 2:
                W = "???";
                break;
              case 3:
                W = "???";
                break;
              case 4:
                W = "???";
                break;
              case 5:
                W = "???";
                break;
              case 6:
                W = "???";
                break;
              default:
                break;
            }
            this.nowDate = Y + "???" + M + "???" + D + "??? ";
            this.nowWeek = "???" + W ; 
            this.nowTime = H + ":" + Min + ":" + S;
            // formatDateTime = Y + "???" + M + "???" + D + "??? " + " ???" +W + H + ":" + Min + ":" + S;
          },
        now_report(){
            fetch('http://122.116.217.115:6150/Report/Hour/'+this.input.S_Facility_Id+'/V1')
            .then(res =>{
                return res.json();
            })
            .then(data =>{
                this.now_reportData = data
                console.log(this.now_reportData);
                var header = document.getElementById("report_btn_container")
                var segmentedControlBtn = header.getElementsByClassName("btn_segmented_control");
                for(var i = 0; i < segmentedControlBtn.length; i++){
                    segmentedControlBtn[i].addEventListener('click',function(){
                        var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        this.className += " active";
                    });
                }
                var dataLabels = ['1:00:00', '2:00:00', '3:00:00', '4:00:00', '5:00:00', '6:00:00', '7:00:00', '8:00:00' ,'9:00:00' ,'10:00:00' ,'11:00:00', '12:00:00' ,'13:00:00' ,'14:00:00' ,'15:00:00' ,'16:00:00' ,'17:00:00' ,'18:00:00' ,'19:00:00' ,'20:00:00' ,'21:00:00', '22:00:00' ,'23:00:00' ,'0:00:00'];                    
                var ctx = document.getElementById("chart_power");
                    var chart1 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:dataLabels1 ,
                            datasets:[
                                {
                                label:'???????????????(kWh)',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            },
                            ],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                xAxes:[{
                                    scaleLabel: {
                                        display: true,
                                      },
                                }],
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    var ctx = document.getElementById("chart_pr"),
                    chart2 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:[],
                            datasets:[{
                                label:'PR %',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false,
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    var ctx = document.getElementById("chart_ach"),
                    chart3 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:[],
                            datasets:[{
                                label:'????????? %',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false,
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    var ctx = document.getElementById("chart_proper"),
                    chart4 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:[],
                            datasets:[{
                                label:'????????? %',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false,
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })

                    var dataLabels5 = ['2:00:00', '3:00:00', '4:00:00', '5:00:00', '6:00:00', '7:00:00', '8:00:00' ,'9:00:00' ,'10:00:00' ,'11:00:00', '12:00:00' ,'13:00:00' ,'14:00:00' ,'15:00:00' ,'16:00:00' ,'17:00:00' ,'18:00:00' ,'19:00:00' ,'20:00:00' ,'21:00:00', '22:00:00' ,'23:00:00' ,'0:00:00','1:00:00',];                    
                    var ctx = document.getElementById("chart_predict_power"),
                    chart5 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:dataLabels5 ,
                            datasets:[
                            {
                                label:'???????????????(kWh)',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)',
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                xAxes:[{
                                    scaleLabel: {
                                        display: true,
                                      },
                                }],
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    if(this.now_reportData[0].Report.length===0){
                        alert("no data");
                    }else{
                        for(var i=0;i<24;i++){
                            if (!this.now_reportData[0].Report[i]){
                                break;
                            }
                            var New_PR = this.now_reportData[0].Report[i].F_PR - (Math.floor(Math.random()*11))
                            chart1.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Power_Output)
                            chart1.update();
                            chart2.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart2.data.datasets[0].data.push(New_PR)
                            chart2.update();
                            chart3.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart3.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Achievement)
                            chart3.update();
                            chart4.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart4.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Proper)
                            chart4.update();
                            chart5.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_ACP_Predict)
                            chart5.update();
                        }
                    }
                    setInterval(function() {
                            if(chart1.data.datasets.length>0){
                                var last = parseInt(dataLabels1[dataLabels1.length - 1]);
                                var label = last + 1;
                                if (last >= 23) {
                                    label = 0;
                                }
                                label = label + ':00:00'
                                chart1.data.labels.push(label);
                                for(var i = 0;i<24;i++){
                                    chart1.data.datasets[0].data.push(getRandomNum(14730, 14735))
                                    // chart1.data.datasets[1].data.push(getRandomNum(14685, 14712))
                                }
                                

                                dataLabels1.shift();
                                chart1.data.datasets[0].data.shift();
                                // chart1.data.datasets[1].data.shift();
                                chart1.update();
                            }
                        
                    },10000)
                    function getRandomNum(min, max) {
                        var range = max - min;
                        var rand = Math.random();
                        return(min + Math.round(rand * range));
                    }
                    setInterval(function() {
                        if(chart5.data.datasets.length>0){
                            var last = parseInt(dataLabels5[dataLabels5.length - 1]);
                            var label = last + 1;
                            if (last >= 23) {
                                label = 0;
                            }
                            label = label + ':00:00'
                            chart5.data.labels.push(label);
                            for(var i = 0;i<24;i++){
                                chart5.data.datasets[0].data.push(getRandomNum(14730, 14735))
                            }
                            dataLabels5.shift();
                            chart5.data.datasets[0].data.shift();
                            chart5.update();
                        }
                    
                    },10000)
                
            })
        },
        year_report(){
            fetch('http://122.116.217.115:6150/Report/Year/'+this.input.S_Facility_Id+'/V1')
            .then(res =>{
                return res.json();
            })
            .then(data =>{
                this.year_reportData = data
                console.log(this.year_reportData)
                var header = document.getElementById("report_btn_container")
                var segmentedControlBtn = header.getElementsByClassName("btn_segmented_control");
                for(var i = 0; i < segmentedControlBtn.length; i++){
                    segmentedControlBtn[i].addEventListener('click',function(){
                        var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        this.className += " active";
                    });
                }
                var ctx = document.getElementById("chart_power");
                var chart1 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[
                            {
                            label:'?????????',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        },
                        {
                            type:'line',
                            label:'???????????????',
                            data:[],
                            borderColor:'green',
                            // backgroundColor:'#faa',
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:true,
                            text:'????????????(kWh)'
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_pr"),
                chart2 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'PR %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_ach"),
                chart3 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'????????? %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_proper"),
                chart4 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'????????? %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var dt = new Date();
                if(this.year_reportData[0].Report.length===0){
                    alert("no data");
                }else{
                    for(var i=0;i<dt.getHours();i++){
                        if (!this.year_reportData[0].Report[i].DT_Update){
                            break;
                        }
                        chart1.data.labels.push(this.year_reportData[0].Report[i].DT_Update)
                        chart1.data.datasets[0].data.push(this.year_reportData[0].Report[i].F_Power_Output)
                        chart1.data.datasets[1].data.push(this.year_reportData[0].Report[i].F_ACP_Predict)
                        chart1.update();
                        chart2.data.labels.push(this.year_reportData[0].Report[i].DT_Update)
                        chart2.data.datasets[0].data.push(this.year_reportData[0].Report[i].F_PR)
                        chart2.update();
                        chart3.data.labels.push(this.year_reportData[0].Report[i].DT_Update)
                        chart3.data.datasets[0].data.push(this.year_reportData[0].Report[i].F_Achievement)
                        chart3.update();
                        chart4.data.labels.push(this.year_reportData[0].Report[i].DT_Update)
                        chart4.data.datasets[0].data.push(this.year_reportData[0].Report[i].F_Proper)
                        chart4.update();
                    }
                }
            })
        },
        month_report(){
            fetch('http://122.116.217.115:6150/Report/Month/'+this.input.S_Facility_Id+'/V1')
            .then(res =>{
                return res.json();
            })
            .then(data =>{
                this.month_reportData = data
                console.log(this.month_reportData)
                var header = document.getElementById("report_btn_container")
                var segmentedControlBtn = header.getElementsByClassName("btn_segmented_control");
                for(var i = 0; i < segmentedControlBtn.length; i++){
                    segmentedControlBtn[i].addEventListener('click',function(){
                        var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        this.className += " active";
                    });
                }
                var ctx = document.getElementById("chart_power");
                var chart1 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[
                            {
                            label:'?????????',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        },
                        {
                            type:'line',
                            label:'???????????????',
                            data:[],
                            borderColor:'green',
                            // backgroundColor:'#faa',
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:true,
                            text:'????????????(kWh)'
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_pr"),
                chart2 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'PR %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_ach"),
                chart3 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'????????? %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_proper"),
                chart4 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'????????? %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var dt = new Date();
                if(this.month_reportData[0].Report.length===0){
                    alert("no data");
                }else{
                    for(var i=0;i<dt.getHours();i++){
                        if (!this.month_reportData[0].Report[i].DT_Update){
                            break;
                        }
                        chart1.data.labels.push(this.month_reportData[0].Report[i].DT_Update)
                        chart1.data.datasets[0].data.push(this.month_reportData[0].Report[i].F_Power_Output)
                        chart1.data.datasets[1].data.push(this.month_reportData[0].Report[i].F_ACP_Predict)
                        chart1.update();
                        chart2.data.labels.push(this.month_reportData[0].Report[i].DT_Update)
                        chart2.data.datasets[0].data.push(this.month_reportData[0].Report[i].F_PR)
                        chart2.update();
                        chart3.data.labels.push(this.month_reportData[0].Report[i].DT_Update)
                        chart3.data.datasets[0].data.push(this.month_reportData[0].Report[i].F_Achievement)
                        chart3.update();
                        chart4.data.labels.push(this.month_reportData[0].Report[i].DT_Update)
                        chart4.data.datasets[0].data.push(this.month_reportData[0].Report[i].F_Proper)
                        chart4.update();
                    }
                }
                
            })
        },
        Day_report(){
            fetch('http://122.116.217.115:6150/Report/Day/'+this.input.S_Facility_Id+'/V1')
            .then(res =>{
                return res.json();
            })
            .then(data =>{
                this.day_reportData = data
                console.log(this.day_reportData)
                var header = document.getElementById("report_btn_container")
                var segmentedControlBtn = header.getElementsByClassName("btn_segmented_control");
                for(var i = 0; i < segmentedControlBtn.length; i++){
                    segmentedControlBtn[i].addEventListener('click',function(){
                        var current = document.getElementsByClassName("active");
                        current[0].className = current[0].className.replace(" active", "");
                        this.className += " active";
                    });
                }
                var ctx = document.getElementById("chart_power");
                var chart1 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[
                            {
                            label:'?????????',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        },
                        {
                            type:'line',
                            label:'???????????????',
                            data:[],
                            borderColor:'green',
                            // backgroundColor:'#faa',
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:true,
                            text:'????????????(kWh)'
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_pr"),
                chart2 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'PR %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_ach"),
                chart3 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'????????? %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var ctx = document.getElementById("chart_proper"),
                chart4 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[{
                            label:'????????? %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //????????????
                        reponsive:true,
                        //????????????
                        title:{
                            display:false,
                        },
                        //??????
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y?????????
                            yAxis:[{
                                //y?????????
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                var dt = new Date();
                if(this.day_reportData[0].Report.length===0){
                    alert("no data");
                }else{
                    for(var i=0;i<dt.getHours();i++){
                        if (!this.day_reportData[0].Report[i].DT_Update){
                            break;
                        }
                        chart1.data.labels.push(this.day_reportData[0].Report[i].DT_Update)
                        chart1.data.datasets[0].data.push(this.day_reportData[0].Report[i].F_Power_Output)
                        chart1.data.datasets[1].data.push(this.day_reportData[0].Report[i].F_ACP_Predict)
                        chart1.update();
                        chart2.data.labels.push(this.day_reportData[0].Report[i].DT_Update)
                        chart2.data.datasets[0].data.push(this.day_reportData[0].Report[i].F_PR)
                        chart2.update();
                        chart3.data.labels.push(this.day_reportData[0].Report[i].DT_Update)
                        chart3.data.datasets[0].data.push(this.day_reportData[0].Report[i].F_Achievement)
                        chart3.update();
                        chart4.data.labels.push(this.day_reportData[0].Report[i].DT_Update)
                        chart4.data.datasets[0].data.push(this.day_reportData[0].Report[i].F_Proper)
                        chart4.update();
                    }
                }
            })
        }
        
    },
    computed:{
        typeList(){
            let obj = {
                sort:[],
                map:{}
            }
            this.station_lists.forEach(({S_Station_Name, S_Station_Id, I_Generator_Number}, idx) =>{
                if(!obj.map[S_Station_Name]){   
                    obj.sort.push(S_Station_Name)
                    obj.map[S_Station_Name] = {
                        sort: [],
                        map: [],
                    }
                }
                obj.map[S_Station_Name].sort.push(S_Station_Id);
                for(var idx = 1;idx<=I_Generator_Number;idx++){
                    obj.map[S_Station_Name].map.push(S_Station_Id + '_' + idx);
                }
            })
            
            return obj
        },
        titleList(){
            if(this.input.S_Station_Name){
                return this.typeList.map[this.input.S_Station_Name]
            }else{
                return []
            }
        },
        context(){
            if(this.input.S_Station_Id){
                console.log(this.input.S_Facility_Id);
                fetch('http://122.116.217.115:6150/Report/Hour/'+this.input.S_Facility_Id+'/V1')
                .then(res =>{
                    return res.json();
                })
                .then(data =>{
                    this.now_reportData = data;
                    console.log(this.now_reportData)
                    //???????????????????????????Button??????
                    var header = document.getElementById("report_btn_container")
                    var segmentedControlBtn = header.getElementsByClassName("btn_segmented_control");
                    for(var i = 0; i < segmentedControlBtn.length; i++){
                        segmentedControlBtn[i].addEventListener('click',function(){
                            var current = document.getElementsByClassName("active");
                            current[0].className = current[0].className.replace(" active", "");
                            this.className += " active";
                        });
                    }
                    var dataLabels1 = ['1:00:00', '2:00:00', '3:00:00', '4:00:00', '5:00:00', '6:00:00', '7:00:00', '8:00:00' ,'9:00:00' ,'10:00:00' ,'11:00:00', '12:00:00' ,'13:00:00' ,'14:00:00' ,'15:00:00' ,'16:00:00' ,'17:00:00' ,'18:00:00' ,'19:00:00' ,'20:00:00' ,'21:00:00', '22:00:00' ,'23:00:00' ,'0:00:00'];                    
                    var ctx = document.getElementById("chart_power");
                    var chart1 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:dataLabels1 ,
                            datasets:[
                                {
                                label:'???????????????(kWh)',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                xAxes:[{
                                    scaleLabel: {
                                        display: true,
                                      },
                                }],
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    var ctx = document.getElementById("chart_pr"),
                    chart2 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:[],
                            datasets:[{
                                label:'PR %',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false,
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    var ctx = document.getElementById("chart_ach"),
                    chart3 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:[],
                            datasets:[{
                                label:'????????? %',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false,
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    var ctx = document.getElementById("chart_proper"),
                    chart4 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:[],
                            datasets:[{
                                label:'????????? %',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false,
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })

                    var dataLabels5 = ['2:00:00', '3:00:00', '4:00:00', '5:00:00', '6:00:00', '7:00:00', '8:00:00' ,'9:00:00' ,'10:00:00' ,'11:00:00', '12:00:00' ,'13:00:00' ,'14:00:00' ,'15:00:00' ,'16:00:00' ,'17:00:00' ,'18:00:00' ,'19:00:00' ,'20:00:00' ,'21:00:00', '22:00:00' ,'23:00:00' ,'0:00:00','1:00:00',];                    
                    var ctx = document.getElementById("chart_predict_power"),
                    chart5 = new Chart(ctx,{
                        type:"line",
                        data: {
                            labels:dataLabels5 ,
                            datasets:[
                            {
                                label:'??????????????????kWh???',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)',
                            }],  
                        },
                        options:{
                            //????????????
                            reponsive:true,
                            //????????????
                            title:{
                                display:false,
                            },
                            //??????
                            legend:{
                                display:true
                            },
                            scalse:{
                                xAxes:[{
                                    scaleLabel: {
                                        display: true,
                                      },
                                }],
                                //y?????????
                                yAxis:[{
                                    //y?????????
                                    ticks:{
                                        beginAtZero:true,
                                    }

                                }]
                            }
                        }
                    })
                    if(this.now_reportData[0].Report.length===0){
                        alert("no data");
                    }else{
                        for(var i=0;i<24;i++){
                            if (!this.now_reportData[0].Report[i]){
                                break;
                            }
                            var New_PR = this.now_reportData[0].Report[i].F_PR - (Math.floor(Math.random()*11))
                            chart1.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Power_Output)
                            chart1.update();
                            chart2.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart2.data.datasets[0].data.push(New_PR)
                            chart2.update();
                            chart3.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart3.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Achievement)
                            chart3.update();
                            chart4.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart4.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Proper)
                            chart4.update();
                            chart5.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_ACP_Predict)
                            chart5.update();
                        }
                    }
                    setInterval(function() {
                            if(chart1.data.datasets.length>0){
                                var last = parseInt(dataLabels1[dataLabels1.length - 1]);
                                var label = last + 1;
                                if (last >= 23) {
                                    label = 0;
                                }
                                label = label + ':00:00'
                                chart1.data.labels.push(label);
                                for(var i = 0;i<24;i++){
                                    chart1.data.datasets[0].data.push(getRandomNum(14730, 14735))
                                    // chart1.data.datasets[1].data.push(getRandomNum(14685, 14712))
                                }
                                

                                dataLabels1.shift();
                                chart1.data.datasets[0].data.shift();
                                // chart1.data.datasets[1].data.shift();
                                chart1.update();
                            }
                        
                    },10000)
                    function getRandomNum(min, max) {
                        var range = max - min;
                        var rand = Math.random();
                        return(min + Math.round(rand * range));
                    }
                    setInterval(function() {
                        if(chart5.data.datasets.length>0){
                            var last = parseInt(dataLabels5[dataLabels5.length - 1]);
                            var label = last + 1;
                            if (last >= 23) {
                                label = 0;
                            }
                            label = label + ':00:00'
                            chart5.data.labels.push(label);
                            for(var i = 0;i<24;i++){
                                chart5.data.datasets[0].data.push(getRandomNum(14730, 14735))
                            }
                            dataLabels5.shift();
                            chart5.data.datasets[0].data.shift();
                            chart5.update();
                        }
                    
                    },10000)
                })
                this.dealWithTime(new Date())
                return this.titleList.map[this.input.S_Station_Id]  
            }else{
                return null
            }
        },
    },
}
var count = 0;
var Monitor_page = {
    template:'#monitor_page',
    data(){
        return {
            cname:user_name,
            station_lists:[],
            input: {
                S_Station_Name: '??????',
                S_Station_Id: 'Z101',
                S_Facility_Id: 'Z101_1',
            },
            err:[],
            real:[],
            recodes:[],
            countOfPage:10,
            currPage:1,
            filter_name:'',
            loadingText: 'Fetching data..',
            iconLoading:false,
            result:0,
            nowDate: "",    // ????????????
            nowTime: "",    // ????????????
            nowWeek: "",    // ????????????
            time: 0,
        }
    },
    mounted(){
        fetch('http://122.116.217.115:6150/Station/Choose/'+user_name+'/V1')
        .then(response => response.json())
        .then(station_lists => {
                this.station_lists = station_lists;
        })
        .catch(function(err){  
            console.log(err);
        })
        // ????????????????????????????????????
        this.dealWithTime(new Date())
    },
    computed:{
        typeList(){
            let obj = {
                sort:[],
                map:{},
            }
            this.station_lists.forEach(({S_Station_Name, S_Station_Id, I_Generator_Number}, idx) =>{
                if(!obj.map[S_Station_Name]){   
                    obj.sort.push(S_Station_Name)
                    obj.map[S_Station_Name] = {
                        sort: [],
                        map: [],
                    }
                }
                obj.map[S_Station_Name].sort.push(S_Station_Id);
                for(var idx = 1;idx<=I_Generator_Number;idx++){
                    obj.map[S_Station_Name].map.push(S_Station_Id + '_' + idx);
                }
            })
            
            return obj
        },
        titleList(){
            if(this.input.S_Station_Name){
                return this.typeList.map[this.input.S_Station_Name]
            }else{
                return []
            }
        },
        filterRows: function(){
            // ?????? JavaScript ??? filter ??????????????????
            // ??????????????? filter_name ??? rows[n].name ??????????????????????????????
            var filter_name = this.filter_name.toLowerCase()
            
            // ?????? filter_name ????????????????????????????????????????????????????????? rows ?????????
            if(this.filter_name.trim() != ''){
              return this.recodes.filter(function(d){return d.DT_Data_Get.toLowerCase().indexOf(filter_name) > -1})
            }else{
              return this.recodes
            }
        },
        pageStart: function(){
            return (this.currPage-1) * this.countOfPage
        },
        totalPage: function(){
            return Math.ceil(this.recodes.length / this.countOfPage)
        }
    },
    
    methods:{
        repost_real(){
            const station_data = {
                S_Station_Id:this.input.S_Station_Id,
                S_Facility_Id:this.input.S_Facility_Id,
            };
                this.iconLoading = true;
                    axios.post('http://122.116.217.115:6150/Station/Data/Real/V1',station_data)
                    .then(response=>{
                        var real = response.data[0].Station_Real;
                        this.real=real;
                        console.log(this.real);
                        this.iconLoading = false;
                        if(this.real[0]===undefined){
                            console.log(this.input.S_Facility_Id+"??????????????????????????????");
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                    this.dealWithTime(new Date())
                
                    
        },
        repost_error(){
            if(this.input.S_Station_Id === null){
                console.log(this.input.S_Facility_Id+"??????????????????????????????");
            }else{
                const err_data = {
                    S_Station_Id:this.input.S_Station_Id,
                    S_Facility_Id:this.input.S_Facility_Id,
                };
                    this.iconLoading = true;
                        axios.post('http://122.116.217.115:6150/Error/Announce/V1',err_data)
                        .then(response=>{
                            var err = response.data[0].Error_Announce;
                            this.err = err;
                            console.log(this.err);
                            this.iconLoading = false;
                            if(this.err[0]===undefined){
                                console.log(this.input.S_Facility_Id+"??????????????????????????????");
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                        this.dealWithTime(new Date())
            }
        },
        repost_his(){
            const recode_data = {
                S_Station_Id:this.input.S_Station_Id,
                S_Facility_Id:this.input.S_Facility_Id,
            };
                this.iconLoading = true;
                    axios.post('http://122.116.217.115:6150/Station/Data/Recode/V1',recode_data)
                    .then(response=>{
                        var his = response.data[0].Station_Recode
                        this.recodes=his;
                        console.log(this.recodes);
                        this.iconLoading = false;
                        if(this.recodes[0]===undefined){
                            console.log(this.input.S_Facility_Id+"??????????????????????????????");
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                    this.currPage = 1;
                    this.dealWithTime(new Date())
                
            
        },
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        xls_event(){
            count++;
            $('#historical').table2excel({
                exclude:".noExl",
                name:"Excel Document Name",
                filename: "Frontend_Test_his_data"+count
            });                                                     
        },
        
        real_time(){
            const station_data = {
                S_Station_Id:this.input.S_Station_Id,
                S_Facility_Id:this.input.S_Facility_Id,
            };
            if(this.input.S_Station_Id != ''){
                this.iconLoading = true;
                        axios.post('http://122.116.217.115:6150/Station/Data/Real/V1',station_data)
                        .then(response=>{
                            var real = response.data[0].Station_Real;
                            this.real=real;
                            console.log(this.real);
                            this.iconLoading = false;
                            if(this.real[0]===undefined){
                                console.log(this.input.S_Facility_Id+"??????????????????????????????");
                            }
                            // Add active class to the current button (highlight it)
                            var header = document.getElementById("single_fan_data");
                            var btns = header.getElementsByClassName("fan_btn");
                            for (var i = 0; i < btns.length; i++) {
                                btns[i].addEventListener("click", function() {
                                    var current = document.getElementsByClassName("active");
                                    current[0].className = current[0].className.replace(" active", "");
                                    this.className += " active";
                                });
                            }
                            
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                        this.dealWithTime(new Date())
                    var i;
                    var x = document.getElementsByClassName("table_box");
                    for(i = 0; i < x.length; i++){
                        x[i].style.display = "none";
                    }
                    document.getElementById("real_time_cont").style.display = "block";
            }else{
                console.log(this.input.S_Facility_Id+"??????????????????????????????");
            }
            // this.time = setInterval(this.repost_real,180000)
        },
        recode(){
            const recode_data = {
                S_Station_Id:this.input.S_Station_Id,
                S_Facility_Id:this.input.S_Facility_Id,
            };
            if(this.input.S_Station_Id != null){
                this.iconLoading = true;
                // const repost = () => {
                    axios.post('http://122.116.217.115:6150/Station/Data/Recode/V1',recode_data)
                    .then(response=>{
                        var his = response.data[0].Station_Recode
                        this.recodes=his;
                        console.log(this.recodes);
                        this.iconLoading = false;
                        if(this.recodes[0]===undefined){
                            console.log(this.input.S_Facility_Id+"??????????????????????????????");
                        }
                        // Add active class to the current button (highlight it)
                        var header = document.getElementById("single_fan_data");
                        var btns = header.getElementsByClassName("fan_btn");
                        for (var i = 0; i < btns.length; i++) {
                            btns[i].addEventListener("click", function() {
                                var current = document.getElementsByClassName("active");
                                current[0].className = current[0].className.replace(" active", "");
                                this.className += " active";
                            });
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                    this.currPage = 1;
                    this.dealWithTime(new Date())
                var i;
                var x = document.getElementsByClassName("table_box");
                for(i = 0; i < x.length; i++){
                    x[i].style.display = "none";
                }
                document.getElementById("historical_cont").style.display = "block";
            }else{
                alert("???????????????");
            }
            this.time = setInterval(this.repost_his,180000)
        },
        error_data(){
            if(this.input.S_Station_Id === null){
                alert("???????????????");
            }else{
                const err_data = {
                    S_Station_Id:this.input.S_Station_Id,
                    S_Facility_Id:this.input.S_Facility_Id,
                };
                if(this.input.S_Station_Id != null){
                    this.iconLoading = true;
                        axios.post('http://122.116.217.115:6150/Error/Announce/V1',err_data)
                        .then(response=>{
                            var err = response.data[0].Error_Announce;
                            this.err = err;
                            console.log(this.err);
                            this.iconLoading = false;
                            if(this.err[0]===undefined){
                                console.log(this.input.S_Facility_Id+"??????????????????????????????");
                            }
                            // Add active class to the current button (highlight it)
                            var header = document.getElementById("single_fan_data");
                            var btns = header.getElementsByClassName("fan_btn");
                            for (var i = 0; i < btns.length; i++) {
                                btns[i].addEventListener("click", function() {
                                    var current = document.getElementsByClassName("active");
                                    current[0].className = current[0].className.replace(" active", "");
                                    this.className += " active";
                                });
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                        this.dealWithTime(new Date())
                    var i;
                    var x = document.getElementsByClassName("table_box");
                    for(i = 0; i < x.length; i++){
                        x[i].style.display = "none";
                    }
                    document.getElementById("error_cont").style.display = "block";
                }
            }
            this.time = setInterval(this.repost_error,180000)
        },
        setPage(idx){
            if(idx <= 0 || idx > this.totalPage){
              return
            }
            this.currPage = idx
        },
        dealWithTime(data) { // ??????????????????
            let formatDateTime;
            let Y = data.getFullYear();
            let M = data.getMonth() + 1;
            let D = data.getDate();
            let H = data.getHours();
            let Min = data.getMinutes();
            let S = data.getSeconds();
            let W = data.getDay();
            H = H < 10 ? "0" + H : H;
            Min = Min < 10 ? "0" + Min : Min;
            S = S < 10 ? "0" + S : S;
            switch (W) {
              case 0:
                W = "???";
                break;
              case 1:
                W = "???";
                break;
              case 2:
                W = "???";
                break;
              case 3:
                W = "???";
                break;
              case 4:
                W = "???";
                break;
              case 5:
                W = "???";
                break;
              case 6:
                W = "???";
                break;
              default:
                break;
            }
            this.nowDate = Y + "???" + M + "???" + D + "??? ";
            this.nowWeek = "???" + W ; 
            this.nowTime = H + ":" + Min + ":" + S;
            // formatDateTime = Y + "???" + M + "???" + D + "??? " + " ???" +W + H + ":" + Min + ":" + S;
          },
    },
    
}
var Setup_page = {
    template:'#setup_page',
    data(){
        return {
            cname:user_name,
            station_lists:[],
            input: {
                S_Station_Name: '??????',
                S_Station_Id: 'Z101',
                S_Facility_Id: null,
            },
            in_activ: true,
            edit_id: 0,
            edit_index: 0,
            edit_tip: 0,
            set_value:[]
        }
    },
    mounted(){
        fetch('http://122.116.217.115:6150/Station/Choose/'+user_name+'/V1')
        .then(response => response.json())
        .then(station_lists => {
                this.station_lists = station_lists;
        })
        .catch(function(err){  
            console.log(err);
        })
    },
    computed:{
        typeList(){
            let obj = {
                sort:[],
                map:{}
            }
            this.station_lists.forEach(({S_Station_Name, S_Station_Id, I_Generator_Number}, idx) =>{
                if(!obj.map[S_Station_Name]){   
                    obj.sort.push(S_Station_Name)
                    obj.map[S_Station_Name] = {
                        sort: [],
                        map: [],
                    }
                }
                obj.map[S_Station_Name].sort.push(S_Station_Id);
                for(var idx = 1;idx<=I_Generator_Number;idx++){
                    obj.map[S_Station_Name].map.push(S_Station_Id + '_' + idx);
                }
            })
            
            return obj
        },
        titleList(){
            if(this.input.S_Station_Name){
                return this.typeList.map[this.input.S_Station_Name]
            }else{
                return []
            }
        },
        context(){
            if(this.input.S_Facility_Id){
                console.log(this.input.S_Station_Id)
                console.log(this.input.S_Facility_Id)
                const station_Id = {
                    S_Station_Id:this.input.S_Station_Id,
                    S_Facility_Id:this.input.S_Facility_Id,
                };
                axios.post('http://122.116.217.115:6150/Config/Setting/Data/V1',station_Id)
                    .then(response=>{
                        console.log(response.data);
                        var set_value = response.data[0].Config_Setting;
                        this.set_value = set_value;
                        
                    })
                    .catch(err=>{
                        console.log(err);
                        
                    })
                return this.titleList.map[this.input.S_Facility_Id]
            }else{
                return null
            }
        },
    },
    methods: {
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            console.log(user_account_chk)
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                // Close one dropdown when selecting another
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                // Clicking away from dropdown will remove the dropdown class
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                // Toggle open and close nav styles on click
                $("#nav-toggle").click(function () {
                $(".nav_header ul").slideToggle();
                });
                // Hamburger to X toggle
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        save_row() {
            const set_data = {
                    S_Station_Id:this.input.S_Station_Id,
                    S_Facility_Id:this.input.S_Facility_Id,
                    F_Red_Direction_U:this.set_value[0].F_Red_Direction_U,
                    F_Red_Direction_D:this.set_value[0].F_Red_Direction_D,
                    F_Red_Power_U:this.set_value[0].F_Red_Power_U,
                    F_Red_Power_D:this.set_value[0].F_Red_Power_D,
                    F_Red_Speed_U:this.set_value[0].F_Red_Speed_U,
                    F_Red_Speed_D:this.set_value[0].F_Red_Speed_D,
                    F_Red_Temperature_U:this.set_value[0].F_Red_Temperature_U,
                    F_Red_Temperature_D:this.set_value[0].F_Red_Temperature_D,
                    F_Yellow_Direction_U:this.set_value[0].F_Yellow_Direction_U,
                    F_Yellow_Direction_D:this.set_value[0].F_Yellow_Direction_D,
                    F_Yellow_Power_U:this.set_value[0].F_Yellow_Power_U,
                    F_Yellow_Power_D:this.set_value[0].F_Yellow_Power_D,
                    F_Yellow_Speed_U:this.set_value[0].F_Yellow_Speed_U,
                    F_Yellow_Speed_D:this.set_value[0].F_Yellow_Speed_D,
                    F_Yellow_Temperature_U:this.set_value[0].F_Yellow_Temperature_U,
                    F_Yellow_Temperature_D:this.set_value[0].F_Yellow_Temperature_D,
                    
               }
                axios.post('http://122.116.217.115:6150/Config/Setting/Update/V1',set_data)
                    .then(response=>{
                        console.log(response.data);
                        console.log(set_data);
                        alert("Save")
                    })
                    .catch(err=>{
                        console.log(err);
                        
                    })
                    
               console.log(this.set_value[0].F_Red_Direction_U)
                //------------------------------------------------------------------------------
             
            
        },
        
    },
}

var Abnormal_management = {
    template:"#abnormal_management",
    data(){
        return {
            cname:user_name,
            station_lists:[],
            input: {
                S_Station_Name: '??????',
                S_Station_Id: null,
                S_Facility_Id: null,
            },
            error_announce:[],
            cart:{},
            error_recode:[],
            S_Repairer:"",
            DT_Repair:"",
            S_Error_Material:"",
            S_Error_Reason:""
        }
    },
    mounted(){
        fetch('http://122.116.217.115:6150/Station/Choose/'+user_name+'/V1')
        .then(response => response.json())
        .then(station_lists => {
                this.station_lists = station_lists;
        })
        .catch(function(err){  
            console.log(err);
        })

        $(".tab_content").hide();
        $(".tab_content:first").show();

        $("ul.repair_tabs li").click(function() {
            
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel"); 
        $("#"+activeTab).fadeIn();		
            
        $("ul.repair_tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
        
        });
        $(".tab_drawer_heading").click(function() {
        
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel"); 
        $("#"+d_activeTab).fadeIn();
        
        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");
        
        $("ul.repair_tabs li").removeClass("active");
        $("ul.repair_tabs li[rel^='"+d_activeTab+"']").addClass("active");
        });
        $('ul.tabs li').last().addClass("tab_last");
          
    },
    methods:{
        logout_evt(){
            const register_data = {
                S_Username:user_name
            };
            axios.post('http://122.116.217.115:6150/User/Logout/V1',register_data)
            .then(response=>{
                console.log(response);
                window.sessionStorage.removeItem("user_account")
                setTimeout(function(){location.reload()},500);
                router.push('/login');
            }).catch(err=>{
                console.log(err);
            })
        },
        pop_little_window(){
            if(user_account_chk != null){
                var pop = document.getElementById("pop_profile");
                if(pop.style.visibility === "hidden"){
                    pop.style.visibility = "visible"
                }else{
                    pop.style.visibility = "hidden";
                }
            }else{
                    router.push('/login')
            }
        },
        
        dropdown(){
            $(".nav_header ul li a:not(:only-child)").click(function (e) {
                $(this).siblings(".nav_dropdown").toggle();
                $(".nav_dropdown").not($(this).siblings()).hide();
                e.stopPropagation();
                });
                $("html").click(function () {
                $(".nav_dropdown").hide();
                });
                $("#nav-toggle").click(function () {
                $(".nav_header ul").toggle();
                });
                $("#nav-toggle").on("click", function () {
                this.classList.toggle("active");
                });
        },
        repair_done(item){
            var pop = document.getElementById("repairDoneWindow");
            if(pop.style.visibility === "hidden"){
                pop.style.visibility = "visible"
                this.cart = (JSON.parse(JSON.stringify(item)));
                console.log(this.cart)
                
            }else{
                pop.style.visibility = "hidden";
            }
            
        },

        cacel_btn(){
            var cacel = document.getElementById("repairDoneWindow");
            cacel.style.visibility = "hidden"
        },
        enter_btn(){
            const apply_repired_data = {
                S_Station_Id:this.input.S_Station_Id,
                S_Facility_Id:this.input.S_Facility_Id,
                S_Repairer:this.S_Repairer,
                S_Error_Reason:this.cart.S_Error_Reason,
                S_Error_Material:this.S_Error_Material,
                DT_Repair:this.DT_Repair,
                S_Error_Description:this.cart.S_Error_Description
            }
            axios.post('http://122.116.217.115:6150/Error/Repair/V1',apply_repired_data)
                .then(response=>{
                    console.log(response.data)
                    this.S_Repairer="",
                    this.DT_Repair="",
                    this.S_Error_Material="",
                    this.S_Error_Reason=""
                    var pop = document.getElementById("repairDoneWindow");
                    pop.style.visibility = "hidden";
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        recode(){
            console.log(this.input.S_Station_Id)
            console.log(this.input.S_Facility_Id)
            const station_data = {
                S_Station_Id:this.input.S_Station_Id,
                S_Facility_Id:this.input.S_Facility_Id,
            };
            if(this.input.S_Station_Id != null){
                axios.post('http://122.116.217.115:6150/Error/Recode/V1',station_data)
                .then(response=>{
                    var error_recode = response.data[0].Error_Recode;
                    this.error_recode = error_recode;
                    console.log(this.error_recode)
                })
                .catch(err=>{
                    console.log(err);
                })
            }else{
                console.log("???????????????");
            }
        },
        repairring(){
            const station_data = {
                S_Station_Id:this.input.S_Station_Id,
                S_Facility_Id:this.input.S_Facility_Id,
            };
                
            axios.post('http://122.116.217.115:6150/Error/Announce/V1',station_data)
            .then(response=>{
                var error_announce = response.data[0].Error_Announce;
                this.error_announce = error_announce;
                console.log(this.error_announce);
                if(this.error_announce.length===0){
                    console.log("??????????????????")
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    computed:{
        typeList(){
            let obj = {
                sort:[],
                map:{},
                machine:[],
            }
            this.station_lists.forEach(({S_Station_Name, S_Station_Id, I_Generator_Number}, index) =>{

                if(!obj.map[S_Station_Name]){   
                    obj.sort.push(S_Station_Name)

                    obj.map[S_Station_Name] = {
                        sort: [],
                        map: {},
                        machine:[],
                    }
                }
                obj.map[S_Station_Name].sort.push(S_Station_Id);
                obj.map[S_Station_Name].map[S_Station_Id] = {I_Generator_Number}
                for(var idx = 1;idx<=I_Generator_Number;idx++){
                    obj.map[S_Station_Name].machine.push(S_Station_Id + '_' + idx);
                }
                console.log(obj)
            })
            
            return obj
        },
        titleList(){
            this.input.S_Station_Id = null
            if(this.input.S_Station_Name){
                return this.typeList.map[this.input.S_Station_Name]
            }else{
                return []
            }
        },
        content(){
                if(this.input.S_Facility_Id){
                    console.log(this.input.S_Station_Id)
                    console.log(this.input.S_Facility_Id)
                    const station_data = {
                        S_Station_Id:this.input.S_Station_Id,
                        S_Facility_Id:this.input.S_Facility_Id,
                    };
                    axios.post('http://122.116.217.115:6150/Error/Announce/V1',station_data)
                    .then(response=>{
                        var error_announce = response.data[0].Error_Announce;
                        this.error_announce = error_announce;
                        console.log(this.error_announce);
                        if(this.error_announce.length===0){
                            console.log("??????????????????")
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                    return this.titleList.map[this.input.S_Facility_Id]
                }else{
                    // ???????????????????????????????????????
                    return null 
                }
        },

    },
}

const routes = [
    {path: '/',component: Home_page},
    {path: '/login',component: Login_page},
    {path: '/register',component: Register_page},
    {path: '/userset',component: User_set_page},
    {path: '/monitor',component: Monitor_page},
    {path: '/monitor/report',component: Report_page},
    {path: '/station_list',component: Station_list},
    {path: '/facility_status',component: Facility_status},
    {path: '/setup_page',component: Setup_page},
    {path: '/profile_page',component: Profile_page},
    {path: '/station_apply_page',component: Station_apply_page},
    {path: '/abnormal_management',component: Abnormal_management}
];
var router = new VueRouter({routes});
const vm = new Vue({
    router,
    
}).$mount('#app')

