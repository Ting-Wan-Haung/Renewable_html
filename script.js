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
                    this.user_status = '帳號不存在'
                }else if(data[0].status === 'Login_02'){
                    this.user_status = '密碼錯誤'
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
                    this.condition_err = '帳戶已存在'
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
                alert("生日格式錯誤");
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
                        this.userset_status = '驗證碼輸入錯誤'
                    }else if(response.data[0].status==='Verify_02'){
                        this.userset_status = '帳戶已存在'
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
                S_Station_Name: '竹南',
                S_Station_Id: 'Z101'
            },
            energy:''
        }
    },
    template: `
          <div class="station_info">
            <div class="info_title">
                <label>案場資訊</label>
                <div id="select_station_list">
                    <select id="station" class="select_option" v-model="input.S_Station_Name">
                        <option :value="null">案場地點</option>
                        <option :value="item" v-for="item in typeList.sort"">{{item}}</option>
                    </select>
                    <select id="windmachine" class="select_option" v-model="input.S_Station_Id">
                        <option :value="null">案場ID</option>
                        <option :value="item" v-for="item in titleList.sort">{{item}}</option>
                    </select>
                </div>
            </div>
            <div class="info_content" >
                <div id="info_subcontain">
                    <div class="subtitle">
                        <label>地理資訊</label>
                        <div class="caseInfo" v-if="content">
                            <label>案場地點:</label>
                            <div class="case_name">
                                {{ input.S_Station_Name }}
                            </div>
                            <label>地址:</label>
                            <div class="case_name">
                                {{ content.S_Station_Road }}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info_subcontain">
                    <div class="subtitle">
                        <label>能源裝置數量</label>
                        <div class="caseInfo" v-if="content">
                            <label>轉換器數量:</label>
                            <div class="case_name">
                            {{ content.I_Generator_Number }}台
                            </div>
                            <label>閘道器數量:</label>
                            <div class="case_name">
                            {{ content.I_Gateway_Number }}台
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info_subcontain">
                    <div class="subtitle">
                        <label>案場資訊</label>
                        <div class="caseInfo" v-if="content">
                            <label>建置時間:</label>
                            <div class="case_name">
                                {{ content.DT_Station_On }}
                                
                            </div>
                            <label>能源類型:</label>
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
                this.energy = '風力發電'
            }
            else{
                this.energy = '太陽能發電'
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
                S_Station_Name: '竹南',
                S_Station_Id: 'Z101',
            },
              nowDate: "",    // 当前日期
              nowWeek: "",    // 当前星期
              energy:''
        }
    },
    template: `
    <div class="station_info">
    <div class="info_title">
        <label>設備申請</label>
        <div id="select_station_list">
            <select id="station" class="select_option" v-model="input.S_Station_Name">
                <option value="">案場地點</option>
                <option :value="item" v-for="item in typeList.sort">{{item}}</option>
            </select>
            <select id="windmachine"  class="select_option" v-model="input.S_Station_Id">
                <option value="">案場ID</option>
                <option :value="item" v-for="item in titleList.sort">{{item}}</option>
            </select>
        </div>
    </div>
    <div class="info_content">
        <div id="info_subcontain">
            <div class="subtitle">
                <label>地理資訊</label>
                <div class="caseInfo"v-if="content">
                    <label>案場地點:</label>
                    <div class="case_name">
                        {{ content.S_Station_Name }}
                    </div>
                    <label>地址:</label>
                    <div class="case_name">
                        {{ content.S_Station_Road }}
                    </div>
                </div>
            </div>
        </div>
        <div id="info_subcontain">
            <div class="subtitle">
                <label>能源裝置數量</label>
                <div class="caseInfo" v-if="content">
                    <label>發電機數量:</label>
                    <div class="case_name">
                        <input type="number" min="0" class="station_input" v-model="I_Generator_Number">
                    </div>
                    <label>閘道器數量:</label>
                    <div class="case_name">
                    <input type="number" min="0" class="station_input"v-model="I_Gateway_Number">
                    </div>
                </div>
            </div>
        </div>
        <div id="info_subcontain">
            <div class="subtitle">
                <label>案場資訊</label>
                <div class="caseInfo" v-if="content">
                    <label>建置時間:</label>
                    <div class="case_name">
                    {{nowDate}}{{nowWeek}}
                    </div>
                    <label>能源類型:</label>
                    <div class="case_name"@change = "energy_type">
                        {{ energy }}
                        <button id="station_apply_btn" @click="apply_station">申請</button>
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
                alert("已送出");
            }).catch(err=>{
                console.log(err);
                
            })
        },
        dealWithTime(data) { // 获取当前时间
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
                W = "日";
                break;
              case 1:
                W = "一";
                break;
              case 2:
                W = "二";
                break;
              case 3:
                W = "三";
                break;
              case 4:
                W = "四";
                break;
              case 5:
                W = "五";
                break;
              case 6:
                W = "六";
                break;
              default:
                break;
            }
            this.nowDate = Y + "年" + M + "月" + D + "日 ";
            this.nowWeek = "周" + W ; 
            this.nowTime = H + ":" + Min + ":" + S;
            // formatDateTime = Y + "年" + M + "月" + D + "日 " + " 周" +W + H + ":" + Min + ":" + S;
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
        // 页面加载完后显示当前时间
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
                this.energy = '風力發電'
            }
            else{
                this.energy = '太陽能發電'
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
        name:'台灣',
        zip:'886'
    }
  ];
  const cities = [
        {
        name: '基隆市',
        areas: [
            { name: '仁愛區', zip: '200' },
            { name: '信義區', zip: '201' },
            { name: '中正區', zip: '202' },
            { name: '中山區', zip: '203' },
            { name: '安樂區', zip: '204' },
            { name: '暖暖區', zip: '205' },
            { name: '七堵區', zip: '206' },
        ],
        },
        {
        name: '台北市',
        areas: [
            { name: '中正區', zip: '100' },
            { name: '大同區', zip: '103' },
            { name: '中山區', zip: '104' },
            { name: '松山區', zip: '105' },
            { name: '大安區', zip: '106' },
            { name: '萬華區', zip: '108' },
            { name: '信義區', zip: '110' },
            { name: '士林區', zip: '111' },
            { name: '北投區', zip: '112' },
            { name: '內湖區', zip: '114' },
            { name: '南港區', zip: '115' },
            { name: '文山區', zip: '116' },
        ],
        },
        {
        name: '新北市',
        areas: [
            { name: '萬里區', zip: '207' },
            { name: '金山區', zip: '208' },
            { name: '板橋區', zip: '220' },
            { name: '汐止區', zip: '221' },
            { name: '深坑區', zip: '222' },
            { name: '石碇區', zip: '223' },
            { name: '瑞芳區', zip: '224' },
            { name: '平溪區', zip: '226' },
            { name: '雙溪區', zip: '227' },
            { name: '貢寮區', zip: '228' },
            { name: '新店區', zip: '231' },
            { name: '坪林區', zip: '232' },
            { name: '烏來區', zip: '233' },
            { name: '永和區', zip: '234' },
            { name: '中和區', zip: '235' },
            { name: '土城區', zip: '236' },
            { name: '三峽區', zip: '237' },
            { name: '樹林區', zip: '238' },
            { name: '鶯歌區', zip: '239' },
            { name: '三重區', zip: '241' },
            { name: '新莊區', zip: '242' },
            { name: '泰山區', zip: '243' },
            { name: '林口區', zip: '244' },
            { name: '蘆洲區', zip: '247' },
            { name: '五股區', zip: '248' },
            { name: '八里區', zip: '249' },
            { name: '淡水區', zip: '251' },
            { name: '三芝區', zip: '252' },
            { name: '石門區', zip: '253' },
        ],
        },
        {
        name: '桃園市',
        areas: [
            { name: '中壢區', zip: '320' },
            { name: '平鎮區', zip: '324' },
            { name: '龍潭區', zip: '325' },
            { name: '楊梅區', zip: '326' },
            { name: '新屋區', zip: '327' },
            { name: '觀音區', zip: '328' },
            { name: '桃園區', zip: '330' },
            { name: '龜山區', zip: '333' },
            { name: '八德區', zip: '334' },
            { name: '大溪區', zip: '335' },
            { name: '復興區', zip: '336' },
            { name: '大園區', zip: '337' },
            { name: '蘆竹區', zip: '338' },
        ],
        },
        {
        name: '新竹市',
        areas: [
            { name: '新竹市', zip: '300' },
        ],
        },
        {
        name: '新竹縣',
        areas: [
            { name: '竹北市', zip: '302' },
            { name: '湖口鄉', zip: '303' },
            { name: '新豐鄉', zip: '304' },
            { name: '新埔鎮', zip: '305' },
            { name: '關西鎮', zip: '306' },
            { name: '芎林鄉', zip: '307' },
            { name: '寶山鄉', zip: '308' },
            { name: '竹東鎮', zip: '310' },
            { name: '五峰鄉', zip: '311' },
            { name: '橫山鄉', zip: '312' },
            { name: '尖石鄉', zip: '313' },
            { name: '北埔鄉', zip: '314' },
            { name: '峨眉鄉', zip: '315' },
        ],
        },
        {
        name: '苗栗縣',
        areas: [
            { name: '竹南鎮', zip: '350' },
            { name: '頭份鎮', zip: '351' },
            { name: '三灣鄉', zip: '352' },
            { name: '南庄鄉', zip: '353' },
            { name: '獅潭鄉', zip: '354' },
            { name: '後龍鎮', zip: '356' },
            { name: '通霄鎮', zip: '357' },
            { name: '苑裡鎮', zip: '358' },
            { name: '苗栗市', zip: '360' },
            { name: '造橋鄉', zip: '361' },
            { name: '頭屋鄉', zip: '362' },
            { name: '公館鄉', zip: '363' },
            { name: '大湖鄉', zip: '364' },
            { name: '泰安鄉', zip: '365' },
            { name: '銅鑼鄉', zip: '366' },
            { name: '三義鄉', zip: '367' },
            { name: '西湖鄉', zip: '368' },
            { name: '卓蘭鎮', zip: '369' },
        ],
        },
        {
        name: '台中市',
        areas: [
            { name: '中區', zip: '400' },
            { name: '東區', zip: '401' },
            { name: '南區', zip: '402' },
            { name: '西區', zip: '403' },
            { name: '北區', zip: '404' },
            { name: '北屯區', zip: '406' },
            { name: '西屯區', zip: '407' },
            { name: '南屯區', zip: '408' },
            { name: '太平區', zip: '411' },
            { name: '大里區', zip: '412' },
            { name: '霧峰區', zip: '413' },
            { name: '烏日區', zip: '414' },
            { name: '豐原區', zip: '420' },
            { name: '后里區', zip: '421' },
            { name: '石岡區', zip: '422' },
            { name: '東勢區', zip: '423' },
            { name: '和平區', zip: '424' },
            { name: '新社區', zip: '426' },
            { name: '潭子區', zip: '427' },
            { name: '大雅區', zip: '428' },
            { name: '神岡區', zip: '429' },
            { name: '大肚區', zip: '432' },
            { name: '沙鹿區', zip: '433' },
            { name: '龍井區', zip: '434' },
            { name: '梧棲區', zip: '435' },
            { name: '清水區', zip: '436' },
            { name: '大甲區', zip: '437' },
            { name: '外埔區', zip: '438' },
            { name: '大安區', zip: '439' },
        ],
        },
        {
        name: '彰化縣',
        areas: [
            { name: '彰化市', zip: '500' },
            { name: '芬園鄉', zip: '502' },
            { name: '花壇鄉', zip: '503' },
            { name: '秀水鄉', zip: '504' },
            { name: '鹿港鎮', zip: '505' },
            { name: '福興鄉', zip: '506' },
            { name: '線西鄉', zip: '507' },
            { name: '和美鄉', zip: '508' },
            { name: '伸港鄉', zip: '509' },
            { name: '員林鎮', zip: '510' },
            { name: '社頭鄉', zip: '511' },
            { name: '永靖鄉', zip: '512' },
            { name: '埔心鄉', zip: '513' },
            { name: '溪湖鎮', zip: '514' },
            { name: '大村鄉', zip: '515' },
            { name: '埔鹽鄉', zip: '516' },
            { name: '田中鎮', zip: '520' },
            { name: '北斗鎮', zip: '521' },
            { name: '田尾鄉', zip: '522' },
            { name: '埤頭鄉', zip: '523' },
            { name: '溪州鄉', zip: '524' },
            { name: '竹塘鄉', zip: '525' },
            { name: '二林鎮', zip: '526' },
            { name: '大城鄉', zip: '527' },
            { name: '芳苑鄉', zip: '528' },
            { name: '二水鄉', zip: '530' },
        ],
        },
        {
        name: '南投縣',
        areas: [
            { name: '南投市', zip: '540' },
            { name: '中寮鄉', zip: '541' },
            { name: '草屯鎮', zip: '542' },
            { name: '國姓鄉', zip: '544' },
            { name: '埔里鎮', zip: '545' },
            { name: '仁愛鄉', zip: '546' },
            { name: '名間鄉', zip: '551' },
            { name: '集集鎮', zip: '552' },
            { name: '水里鄉', zip: '553' },
            { name: '魚池鄉', zip: '555' },
            { name: '信義鄉', zip: '556' },
            { name: '竹山鎮', zip: '557' },
            { name: '鹿谷鄉', zip: '558' },
        ],
        },
        {
        name: '雲林縣',
        areas: [
            { name: '斗南鎮', zip: '630' },
            { name: '大埤鄉', zip: '631' },
            { name: '虎尾鎮', zip: '632' },
            { name: '土庫鎮', zip: '633' },
            { name: '褒忠鄉', zip: '634' },
            { name: '東勢鄉', zip: '635' },
            { name: '台西鄉', zip: '636' },
            { name: '崙背鄉', zip: '637' },
            { name: '麥寮鄉', zip: '638' },
            { name: '斗六市', zip: '640' },
            { name: '林內鄉', zip: '643' },
            { name: '古坑鄉', zip: '646' },
            { name: '莿桐鄉', zip: '647' },
            { name: '西螺鎮', zip: '648' },
            { name: '二崙鄉', zip: '649' },
            { name: '北港鎮', zip: '651' },
            { name: '水林鄉', zip: '652' },
            { name: '口湖鄉', zip: '653' },
            { name: '四湖鄉', zip: '654' },
            { name: '元長鄉', zip: '655' },
        ],
        },
        {
        name: '嘉義市',
        areas: [
            { name: '嘉義市', zip: '600' },
        ],
        },
        {
        name: '嘉義縣',
        areas: [
            { name: '番路鄉', zip: '602' },
            { name: '梅山鄉', zip: '603' },
            { name: '竹崎鄉', zip: '604' },
            { name: '阿里山', zip: '605' },
            { name: '中埔鄉', zip: '606' },
            { name: '大埔鄉', zip: '607' },
            { name: '水上鄉', zip: '608' },
            { name: '鹿草鄉', zip: '611' },
            { name: '太保鄉', zip: '612' },
            { name: '朴子市', zip: '613' },
            { name: '東石鄉', zip: '614' },
            { name: '六腳鄉', zip: '615' },
            { name: '新港鄉', zip: '616' },
            { name: '民雄鄉', zip: '621' },
            { name: '大林鎮', zip: '622' },
            { name: '溪口鄉', zip: '623' },
            { name: '義竹鄉', zip: '624' },
            { name: '布袋鄉', zip: '625' },
        ],
        },
        {
        name: '台南市',
        areas: [
            { name: '中西區', zip: '700' },
            { name: '東區', zip: '701' },
            { name: '南區', zip: '702' },
            { name: '北區', zip: '704' },
            { name: '安平區', zip: '708' },
            { name: '安南區', zip: '709' },
            { name: '永康區', zip: '710' },
            { name: '歸仁區', zip: '711' },
            { name: '新化區', zip: '712' },
            { name: '左鎮區', zip: '713' },
            { name: '玉井區', zip: '714' },
            { name: '楠西區', zip: '715' },
            { name: '南化區', zip: '716' },
            { name: '仁德區', zip: '717' },
            { name: '關廟區', zip: '718' },
            { name: '龍崎區', zip: '719' },
            { name: '官田區', zip: '720' },
            { name: '麻豆區', zip: '721' },
            { name: '佳里區', zip: '722' },
            { name: '西港區', zip: '723' },
            { name: '七股區', zip: '724' },
            { name: '將軍區', zip: '725' },
            { name: '學甲區', zip: '726' },
            { name: '北門區', zip: '727' },
            { name: '新營區', zip: '730' },
            { name: '後壁區', zip: '731' },
            { name: '白河區', zip: '732' },
            { name: '東山區', zip: '733' },
            { name: '六甲區', zip: '734' },
            { name: '下營區', zip: '735' },
            { name: '柳營區', zip: '736' },
            { name: '鹽水區', zip: '737' },
            { name: '善化區', zip: '741' },
            { name: '大內區', zip: '742' },
            { name: '山上區', zip: '743' },
            { name: '新市區', zip: '744' },
            { name: '安定區', zip: '745' },
        ],
        },
        {
        name: '高雄市',
        areas: [
            { name: '新興區', zip: '800' },
            { name: '前金區', zip: '801' },
            { name: '苓雅區', zip: '802' },
            { name: '鹽埕區', zip: '803' },
            { name: '鼓山區', zip: '804' },
            { name: '旗津區', zip: '805' },
            { name: '前鎮區', zip: '806' },
            { name: '三民區', zip: '807' },
            { name: '楠梓區', zip: '811' },
            { name: '小港區', zip: '812' },
            { name: '左營區', zip: '813' },
            { name: '仁武區', zip: '814' },
            { name: '大社區', zip: '815' },
            { name: '岡山區', zip: '820' },
            { name: '路竹區', zip: '821' },
            { name: '阿蓮區', zip: '822' },
            { name: '田寮區', zip: '823' },
            { name: '燕巢區', zip: '824' },
            { name: '橋頭區', zip: '825' },
            { name: '梓官區', zip: '826' },
            { name: '彌陀區', zip: '827' },
            { name: '永安區', zip: '828' },
            { name: '湖內區', zip: '829' },
            { name: '鳳山區', zip: '830' },
            { name: '大寮區', zip: '831' },
            { name: '林園區', zip: '832' },
            { name: '鳥松區', zip: '833' },
            { name: '大樹區', zip: '840' },
            { name: '旗山區', zip: '842' },
            { name: '美濃區', zip: '843' },
            { name: '六龜區', zip: '844' },
            { name: '內門區', zip: '845' },
            { name: '杉林區', zip: '846' },
            { name: '甲仙區', zip: '847' },
            { name: '桃源區', zip: '848' },
            { name: '那瑪夏區', zip: '849' },
            { name: '茂林區', zip: '851' },
            { name: '茄萣區', zip: '852' },
            { name: '東沙', zip: '817' },
            { name: '南沙', zip: '819' },
        ],
        },
        {
        name: '屏東縣',
        areas: [
            { name: '屏東市', zip: '900' },
            { name: '三地鄉', zip: '901' },
            { name: '霧台鄉', zip: '902' },
            { name: '瑪家鄉', zip: '903' },
            { name: '九如鄉', zip: '904' },
            { name: '里港鄉', zip: '905' },
            { name: '高樹鄉', zip: '906' },
            { name: '鹽埔鄉', zip: '907' },
            { name: '長治鄉', zip: '908' },
            { name: '麟洛鄉', zip: '909' },
            { name: '竹田鄉', zip: '911' },
            { name: '內埔鄉', zip: '912' },
            { name: '萬丹鄉', zip: '913' },
            { name: '潮州鎮', zip: '920' },
            { name: '泰武鄉', zip: '921' },
            { name: '來義鄉', zip: '922' },
            { name: '萬巒鄉', zip: '923' },
            { name: '崁頂鄉', zip: '924' },
            { name: '新埤鄉', zip: '925' },
            { name: '南州鄉', zip: '926' },
            { name: '林邊鄉', zip: '927' },
            { name: '東港鄉', zip: '928' },
            { name: '琉球鄉', zip: '929' },
            { name: '佳冬鄉', zip: '931' },
            { name: '新園鄉', zip: '932' },
            { name: '枋寮鄉', zip: '940' },
            { name: '枋山鄉', zip: '941' },
            { name: '春日鄉', zip: '942' },
            { name: '獅子鄉', zip: '943' },
            { name: '車城鄉', zip: '944' },
            { name: '牡丹鄉', zip: '945' },
            { name: '恆春鎮', zip: '946' },
            { name: '滿洲鄉', zip: '947' },
        ],
        },
        {
        name: '台東縣',
        areas: [
            { name: '台東市', zip: '950' },
            { name: '綠島鄉', zip: '951' },
            { name: '蘭嶼鄉', zip: '952' },
            { name: '延平鄉', zip: '953' },
            { name: '卑南鄉', zip: '954' },
            { name: '鹿野鄉', zip: '955' },
            { name: '關山鎮', zip: '956' },
            { name: '海端鄉', zip: '957' },
            { name: '池上鄉', zip: '958' },
            { name: '東河鄉', zip: '959' },
            { name: '成功鎮', zip: '961' },
            { name: '長濱鄉', zip: '962' },
            { name: '太麻里', zip: '963' },
            { name: '金峰鄉', zip: '964' },
            { name: '大武鄉', zip: '965' },
            { name: '達仁鄉', zip: '966' },
        ],
        },
        {
        name: '花蓮縣',
        areas: [
            { name: '花蓮市', zip: '970' },
            { name: '新城鄉', zip: '971' },
            { name: '秀林鄉', zip: '972' },
            { name: '吉安鄉', zip: '973' },
            { name: '壽豐鄉', zip: '974' },
            { name: '鳳林鎮', zip: '975' },
            { name: '光復鄉', zip: '976' },
            { name: '豐濱鄉', zip: '977' },
            { name: '瑞穗鄉', zip: '978' },
            { name: '萬榮鄉', zip: '979' },
            { name: '玉里鎮', zip: '981' },
            { name: '卓溪鄉', zip: '982' },
            { name: '富里鄉', zip: '983' },
        ],
        },
        {
        name: '宜蘭縣',
        areas: [
            { name: '宜蘭巿', zip: '260' },
            { name: '頭城鎮', zip: '261' },
            { name: '礁溪鄉', zip: '262' },
            { name: '壯圍鄉', zip: '263' },
            { name: '員山鄉', zip: '264' },
            { name: '羅東鎮', zip: '265' },
            { name: '三星鄉', zip: '266' },
            { name: '大同鄉', zip: '267' },
            { name: '五結鄉', zip: '268' },
            { name: '冬山鄉', zip: '269' },
            { name: '蘇澳鎮', zip: '270' },
            { name: '南澳鄉', zip: '272' },
            { name: '釣魚台', zip: '290' },
        ],
        },
        {
        name: '澎湖縣',
        areas: [
            { name: '馬公市', zip: '880' },
            { name: '西嶼鄉', zip: '881' },
            { name: '望安鄉', zip: '882' },
            { name: '七美鄉', zip: '883' },
            { name: '白沙鄉', zip: '884' },
            { name: '湖西鄉', zip: '885' },
        ],
        },
        {
        name: '金門縣',
        areas: [
            { name: '金沙鎮', zip: '890' },
            { name: '金湖鎮', zip: '891' },
            { name: '金寧鄉', zip: '892' },
            { name: '金城鎮', zip: '893' },
            { name: '烈嶼鄉', zip: '894' },
            { name: '烏坵', zip: '896' },
        ],
        },
        {
        name: '連江縣',
        areas: [
            { name: '南竿', zip: '209' },
            { name: '北竿', zip: '210' },
            { name: '莒光', zip: '211' },
            { name: '東引', zip: '212' },
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
            S_Station_Road:'竹興二街',
            I_Generator_Number:'',
            I_Gateway_Number:'',
            countryIdx: 0,
            cityIdx: 6,
            areaIdx: 0,
            selectName : '',
            selectVal : 1,
            energies : [
                {val:1,item:'風力發電'},
                {val:2,item:'太陽能發電'},
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
                alert("已送出");
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
                S_Station_Name: '竹南',
                S_Station_Id: 'Z101',
            },
            facility_update:[],
            toggle:false,
            status:{}
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
        check_status(ckeck_item){
            this.status = (JSON.parse(JSON.stringify(ckeck_item)));
            const facility = {
                S_Facility_Id:this.status.S_Facility_Id,
                I_Status: this.status.I_Status
            };
            axios.post('http://122.116.217.115:6150/Station/Facility/Update/V1',facility)
            .then(response=>{
                console.log(response);
            }).catch(err=>{
                console.log(err);
            })
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
                S_Station_Name: '竹南',
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
        dealWithTime(data) { // 获取当前时间
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
                W = "日";
                break;
              case 1:
                W = "一";
                break;
              case 2:
                W = "二";
                break;
              case 3:
                W = "三";
                break;
              case 4:
                W = "四";
                break;
              case 5:
                W = "五";
                break;
              case 6:
                W = "六";
                break;
              default:
                break;
            }
            this.nowDate = Y + "年" + M + "月" + D + "日 ";
            this.nowWeek = "周" + W ; 
            this.nowTime = H + ":" + Min + ":" + S;
            // formatDateTime = Y + "年" + M + "月" + D + "日 " + " 周" +W + H + ":" + Min + ":" + S;
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
                var ctx = document.getElementById("chart_power");
                var chart1 = new Chart(ctx,{
                    type:"line",
                    data: {
                        labels:[],
                        datasets:[
                        {
                            label:'發電量',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        },
                        {
                            type:'line',
                            label:'預測發電輛',
                            data:[],
                            borderColor:'green',
                            // backgroundColor:'#faa',
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:true,
                            text:'今日發電量(kWh)'
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                    //表格縮放
                    reponsive:true,
                    //表格標題
                    title:{
                        display:false,
                    },
                    //圖例
                    legend:{
                        display:true
                    },
                    scalse:{
                        //y軸設置
                        yAxis:[{
                            //y軸間距
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
                        label:'達成率 %',
                        data:[],
                        borderWidth:1,
                        borderColor:'rgba(0,148,255,0.6)'
                    }],  
                },
                options:{
                    //表格縮放
                    reponsive:true,
                    //表格標題
                    title:{
                        display:false,
                    },
                    //圖例
                    legend:{
                        display:true
                    },
                    scalse:{
                        //y軸設置
                        yAxis:[{
                            //y軸間距
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
                        label:'妥善率 %',
                        data:[],
                        borderWidth:1,
                        borderColor:'rgba(0,148,255,0.6)'
                    }],  
                },
                options:{
                    //表格縮放
                    reponsive:true,
                    //表格標題
                    title:{
                        display:false,
                    },
                    //圖例
                    legend:{
                        display:true
                    },
                    scalse:{
                        //y軸設置
                        yAxis:[{
                            //y軸間距
                            ticks:{
                                beginAtZero:true,
                            }

                        }]
                    }
                }
            })
                var dt = new Date();
                if(this.now_reportData[0].Report.length===0){
                    alert("no data");
                }else{
                    for(var i=0;i<dt.getHours();i++){
                        if (!this.now_reportData[0].Report[i].DT_Update){
                            break;
                        }
                        chart1.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                        chart1.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Power_Output)
                        chart1.data.datasets[1].data.push(this.now_reportData[0].Report[i].F_ACP_Predict)
                        chart1.update();
                        chart2.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                        chart2.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_PR)
                        chart2.update();
                        chart3.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                        chart3.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Achievement)
                        chart3.update();
                        chart4.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                        chart4.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Proper)
                        chart4.update();
                    }
                }
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
                            label:'發電量',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        },
                        {
                            type:'line',
                            label:'預測發電輛',
                            data:[],
                            borderColor:'green',
                            // backgroundColor:'#faa',
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:true,
                            text:'年發電量(kWh)'
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'達成率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'妥善率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'發電量',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        },
                        {
                            type:'line',
                            label:'預測發電輛',
                            data:[],
                            borderColor:'green',
                            // backgroundColor:'#faa',
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:true,
                            text:'月發電量(kWh)'
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'達成率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'妥善率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'發電量',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        },
                        {
                            type:'line',
                            label:'預測發電輛',
                            data:[],
                            borderColor:'green',
                            // backgroundColor:'#faa',
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:true,
                            text:'日發電量(kWh)'
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'達成率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'妥善率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                                label:'發電量',
                                data:[],
                                borderWidth:1,
                                borderColor:'rgba(0,148,255,0.6)'
                            },
                            {
                                type:'line',
                                label:'預測發電輛',
                                data:[],
                                borderColor:'green',
                                // backgroundColor:'#faa',
                            }],  
                        },
                        options:{
                            //表格縮放
                            reponsive:true,
                            //表格標題
                            title:{
                                display:true,
                                text:'今日發電量(kWh)'
                            },
                            //圖例
                            legend:{
                                display:true
                            },
                            scalse:{
                                //y軸設置
                                yAxis:[{
                                    //y軸間距
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
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'達成率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
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
                            label:'妥善率 %',
                            data:[],
                            borderWidth:1,
                            borderColor:'rgba(0,148,255,0.6)'
                        }],  
                    },
                    options:{
                        //表格縮放
                        reponsive:true,
                        //表格標題
                        title:{
                            display:false,
                        },
                        //圖例
                        legend:{
                            display:true
                        },
                        scalse:{
                            //y軸設置
                            yAxis:[{
                                //y軸間距
                                ticks:{
                                    beginAtZero:true,
                                }

                            }]
                        }
                    }
                })
                    var dt = new Date();
                    if(this.now_reportData[0].Report.length===0){
                        alert("no data");
                    }else{
                        for(var i=0;i<dt.getHours();i++){
                            // console.log(i)
                            // console.log(this.now_reportData[0].Report[i].DT_Update)
                            if (!this.now_reportData[0].Report[i]){
                                break;
                            }
                            chart1.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart1.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Power_Output)
                            chart1.data.datasets[1].data.push(this.now_reportData[0].Report[i].F_ACP_Predict)
                            chart1.update();
                            chart2.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart2.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_PR)
                            chart2.update();
                            chart3.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart3.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Achievement)
                            chart3.update();
                            chart4.data.labels.push(this.now_reportData[0].Report[i].DT_Update)
                            chart4.data.datasets[0].data.push(this.now_reportData[0].Report[i].F_Proper)
                            chart4.update();
                        }
                    }
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
                S_Station_Name: '竹南',
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
            nowDate: "",    // 当前日期
            nowTime: "",    // 当前时间
            nowWeek: "",    // 当前星期
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
        // 页面加载完后显示当前时间
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
            // 因為 JavaScript 的 filter 有分大小寫，
            // 所以這裡將 filter_name 與 rows[n].name 通通轉小寫方便比對。
            var filter_name = this.filter_name.toLowerCase()
            
            // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 rows 回傳。
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
                            console.log(this.input.S_Facility_Id+"此案場暫時無即時數據");
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                    this.dealWithTime(new Date())
                
                    
        },
        repost_error(){
            if(this.input.S_Station_Id === null){
                console.log(this.input.S_Facility_Id+"此案場暫時無異常數據");
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
                                console.log(this.input.S_Facility_Id+"此案場暫時無異常數據");
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
                            console.log(this.input.S_Facility_Id+"此案場暫時無歷史數據");
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
                                console.log(this.input.S_Facility_Id+"此案場暫時無即時數據");
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
                console.log(this.input.S_Facility_Id+"此案場暫時無即時數據");
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
                            console.log(this.input.S_Facility_Id+"此案場暫時無歷史數據");
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
                alert("請選擇設備");
            }
            this.time = setInterval(this.repost_his,180000)
        },
        error_data(){
            if(this.input.S_Station_Id === null){
                alert("請選擇設備");
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
                                console.log(this.input.S_Facility_Id+"此案場暫時無異常數據");
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
        dealWithTime(data) { // 获取当前时间
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
                W = "日";
                break;
              case 1:
                W = "一";
                break;
              case 2:
                W = "二";
                break;
              case 3:
                W = "三";
                break;
              case 4:
                W = "四";
                break;
              case 5:
                W = "五";
                break;
              case 6:
                W = "六";
                break;
              default:
                break;
            }
            this.nowDate = Y + "年" + M + "月" + D + "日 ";
            this.nowWeek = "周" + W ; 
            this.nowTime = H + ":" + Min + ":" + S;
            // formatDateTime = Y + "年" + M + "月" + D + "日 " + " 周" +W + H + ":" + Min + ":" + S;
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
                S_Station_Name: '竹南',
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
                S_Station_Name: null,
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
                console.log("請選擇設備");
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
                    console.log("設備尚無數據")
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
                            console.log("設備尚無數據")
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                    return this.titleList.map[this.input.S_Facility_Id]
                }else{
                    // 這樣就呼應了前面的原始資料
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

