<template>
  <div class="container">
    <div class="cabinet content">
      <h1>Личный кабинет</h1>
      <div class="cabinet_content">
        <div class="cabinet_head_content">
          <div>


          </div>


        </div>
        <div class="line_element_cabinet"></div>
      </div>
      <section v-if="activeSection === 'profile'" class="profile">
        <div class="profile_block">

            <div>
              <h3>Мой профиль</h3>
              <img src="../assets/img/photo.png" />
              <p>Кто-то</p>

              <p>id</p>
            </div>
          <div>

            <div>
              <p>Организация :</p>
              <p>Семестр :</p>
              <p>Средний балл :</p>
              <p>Годы обучения :</p>

            </div>

          <div>
            <p>Томский Техникум Информационных Технологий:</p>
            <p>4</p>
            <p>4.7</p>
            <p>2022 - 2026</p>
            </div>
            </div>


        </div>
      </section>

      <section>

        <h3>О студенте</h3>

        <div>
          <p>Дата рождения</p>
          <p>Пол</p>>
        </div>

        <div>
          <p>1st Января 2002</p>
          <p>Мужской</p>
        </div>

        <div>
          <p>№ группы</p>
          <p>Адрес</p>
        </div>

        <div>
          <p>421</p>
          <p>12, abc street, defgh, ijklm - 123456.</p>
        </div>

        <router-link to="/" @click="logout"><button>Выход</button></router-link>

      </section>


    </div>
  </div>
</template>

<style>


</style>

<script setup>
import { ref } from "vue";

const activeSection = ref("profile");

function setActiveSection(section) {
  activeSection.value = section;
}
</script>
<style scoped></style>
<script setup lang="ts">
</script>