const products = [{
    name:"出門",
    remark:"無",
    id:"1",
    onStock: false,
    
  }];
  const App = {
    data() {
      return {
        products:[],
        temp:{
          name:"",
          remark:"",
        },
         isNew:false,
      }
    },
    methods: {
      cancelItem() {
        this.isNew = false;
        this.temp = {}
      },
      delItem() {
        this.products.pop(this.temp);
      },
      addItem(){
        this.isNew = true;
        this.temp = {}
      },
      editItem(item1) {
        this.isNew = true;
        this.temp = {...item1};
      },
      confirmEdit() {
        if(!this.temp.id){
        this.temp.id = new Date().getTime();
        this.onStock = false;
        this.products.push(this.temp);
        this.temp = {};
        }else{
          this.products.forEach((item,i) => {
            if(item.id === this.temp.id){
              this.products[i] = this.temp;
            }
          });
        }
         this.isNew = false;
        this.temp = {};
      }
    },
    created(){
      this.products=products;
    }
  };
  
  Vue.createApp(App).mount('#app');