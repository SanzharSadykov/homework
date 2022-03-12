<template>
    <div class="gallery">

        <div class="flex justify-center items-center">
            <div v-for="data in LG" :key="data.id">
                <div class="lg-block mx-4 my-6 border-2 border-1/2 border-gray-300 bg-white rounded-xl">
                    <a href="#"><p class="lg-link-1 my-6 font-semibold text-center text-lg">{{data.name}}</p></a>
                    <img class="mx-auto w-3/4" :src="data.img" alt="">
                    <a href="#"><p class="lg-link-2 my-6 mx-auto text-center text-gray-500 text-sm">{{data.desc}}</p></a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
        LG: [
            {
                name: 'ТВ/Аудио/Видео',
                desc: 'LG предлагает много инновационных и современных телевизоров на любой вкус',
                img: 'https://www.lg.com/kz/images/televisions/md07525427/large04-260.jpg',
            },
            {
                name: 'Бытовая Техника',
                desc: 'У LG есть идеальный холодильник для Вашего дома и Вашей жизни',
                img: 'https://www.lg.com/kz/images/plp-b2c/kz-home-categoryselector-2.jpg',
            },
            {
                name: 'Мониторы',
                desc: 'UltraWide™ 21:9: полностью погрузит Вас в события на экране',
                img: 'https://www.lg.com/kz/images/plp-b2c/kz-home-categoryselector-3.jpg',
            },
            {
                name: 'Кондиционеры',
                desc: 'Нестандартная форма, сменные изображения и тонкий корпус- все это',
                img: 'https://www.lg.com/kz/images/plp-b2c/260-new1.jpg',
            }
        ]
    }
  }
};
</script>