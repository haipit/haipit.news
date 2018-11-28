<template>
  <div>
    <div class="blocks">
      <h3>О проекте</h3>

      <p>
        HaipIT News - это некомерческий проект, созданный с целью агрегации новостей
        о новинках в сфере высоких технологий из таких популярных источников как
        Хабрахабр, Linux.Org.Ru, OpenNet.Org, Hacker News и некоторые другие.
        С полным списком источников вы можете ознакомиться
        <a href="#sources">чуть ниже</a>.
      </p>

      <p>
        Если Вы хотите предложить источник, то для этого необходимо
        <a
          href="https://github.com/haipit/haipit.news/issues/new"
        >создать заявку</a>
        в специальном репозитории на GitHub.
      </p>
    </div>

    <div class="blocks">
      <h3>Как помочь</h3>

      <p>
        Вы можете помочь проекту несколькими способами, например рассказать об этом проекте
        в социальных сетях или поучаствовать в разработке, ну или просто сделать пожертвование.
      </p>

      <p>
        <a href="https://github.com/haipit/haipit.news">Создать Тикет</a>&nbsp;|
        <a href="http://www.donationalerts.ru/r/evilfreelancer">Сделать пожертвование</a>
      </p>

      <p>Смело пишите если у Вас есть предложения, пожелания или например конструктивная критика.</p>
    </div>

    <div class="blocks">
      <h3>Разработчики</h3>

      <p>
        В настоящий момент у проекта всего один активный разработчик, Вы можете найти
        меня в Twitter под ником
        <a href="https://twitter.com/EvilFreelancer" target="_blank">@EvilFreelancer</a>.
      </p>
    </div>

    <div class="blocks" id="sources">
      <h3>Источники новостей</h3>
      <div class="list-group">
        <sources/>
      </div>
    </div>
  </div>
</template>

<script>
import Sources from "./Sources.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    Sources
  }
})
export default class About extends Vue {
  item = Object;
}
</script>
