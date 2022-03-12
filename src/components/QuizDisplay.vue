<template>
    <div class="gallery">
        <div>
            <div v-for="que in Quiz" :key="que.id"> 
                <div class="ml-16">
                    <h1>{{que.id + '. ' + que.quest}}</h1>
                    <div class="flex items-center my-2">
                        <input type="radio" :name="que.id" class="mx-2" @click="setAnswer(que.id, 1)">
                        <p>{{que.opt1}}</p>
                    </div> 
                    <div class="flex items-center my-2">
                        <input type="radio" :name="que.id" class="mx-2" @click="setAnswer(que.id, 2)">
                        <p>{{que.opt2}}</p>
                    </div>   
                    <div class="flex items-center my-2">
                        <input type="radio" :name="que.id" class="mx-2" @click="setAnswer(que.id, 3)">
                        <p>{{que.opt3}}</p>
                    </div>   
                    <div class="flex items-center my-2">
                        <input type="radio" :name="que.id" class="mx-2" @click="setAnswer(que.id, 4)">
                        <p>{{que.opt4}}</p>
                    </div>                                                                                                 
                </div>
            </div>
            <p v-if="Quiz[0].chosen != 0 && Quiz[1].chosen != 0 && Quiz[2].chosen != 0 && Quiz[3].chosen != 0" class="ml-16">Результат: {{ result }} из 4 ({{ result*25 }}%)</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        result: 0,
        Quiz: [
            {
                quest: "Кто купит сенсею Гориллу?",
                opt1: "Аружан",
                opt2: "Тамила",
                opt3: "Карина",
                opt4: "Рома",
                chosen: 0,
                corr: 3,
                set: false,
                id: 1
            },
            {
                quest: "Что делать, когда студент просит о помощи?",
                opt1: "Ничего не делать",
                opt2: "Проигнорировать",
                opt3: "Отложить это дело на потом",
                opt4: "Всё вышеперечисленное",
                chosen: 0,
                corr: 4,
                set: false,
                id: 2
            },
            {
                quest: "Важно ли сенсею, что все студенты присутствовали на уроке?",
                opt1: "Да, важно",
                opt2: "Нет, не важно",
                opt3: "Ему вообще без разницы",
                opt4: "Нужно, чтобы были все кроме Расула",
                chosen: 0,
                corr: 4,
                set: false,
                id: 3
            },
            {
                quest: "Найдёт ли сенсей карамельно-арахисовый Nestle в магазине?",
                opt1: "По воле случая найдёт",
                opt2: "Никогда не найдёт",
                opt3: "Ему он не нужен",
                opt4: "Он не захочет его находить",
                chosen: 0,
                corr: 1,
                set: false,
                id: 4
            }                                    
        ],
    }
  },
  methods: {
    setAnswer: function(v, n) {
        this.Quiz[v-1].chosen = n;
        if (this.Quiz[v-1].chosen === this.Quiz[v-1].corr) {
            if (this.Quiz[v-1].set === false) {
                this.result = this.result + 1;
                this.Quiz[v-1].set = true;
            }
        } else {
            if (this.Quiz[v-1].set === true) {
                this.result = this.result - 1;
                this.Quiz[v-1].set = false;
            }            
        }
        console.log("В " + v + " вопросе был выбран ответ: " + this.Quiz[v-1].chosen);
    }
  }
};
</script>