<template>
  <div class="student-dashboard">
    <div class="dashboard-header">
      <h1>Личный кабинет студента</h1>
    </div>

    <div class="dashboard-content">
      <!-- Секция профиля -->
      <section class="profile-section">
        <h3>Мой профиль</h3>
        <div class="profile-info">
          <img class="profile-photo" src="../assets/img/photo.png" alt="Фото профиля" />
          <div class="profile-details">
            <p><strong>Имя:</strong> Кто-то</p>
            <p><strong>ID:</strong> 123456</p>
          </div>
        </div>
      </section>

      <!-- Секция информации о студенте -->
      <section class="student-info-section">
        <h3>Информация о студенте</h3>
        <div class="info-grid">
          <div>
            <p><strong>Организация:</strong></p>
            <p><strong>Семестр:</strong></p>
            <p><strong>Средний балл:</strong></p>
            <p><strong>Годы обучения:</strong></p>
          </div>
          <div>
            <p>Томский Техникум Информационных Технологий</p>
            <p>4</p>
            <p>4.7</p>
            <p>2022 - 2026</p>
          </div>
        </div>
      </section>

      <!-- Секция дополнительных данных -->
      <section class="additional-info-section">
        <h3>Дополнительная информация</h3>
        <div class="info-grid">
          <div>
            <p><strong>Дата рождения:</strong></p>
            <p><strong>Пол:</strong></p>
            <p><strong>№ группы:</strong></p>
            <p><strong>Адрес:</strong></p>
          </div>
          <div>
            <p>1 Января 2002</p>
            <p>Мужской</p>
            <p>421</p>
            <p>12, abc street, defgh, ijklm - 123456</p>
          </div>
        </div>
      </section>

      <!-- Кнопка выхода -->
      <div class="logout-button">
        <router-link to="/" @click="logout">
          <button>Выйти</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>

.student-dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 30px;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-section,
.student-info-section,
.additional-info-section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-details p {
  margin: 0;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.info-grid p {
  margin: 5px 0;
}

.logout-button {
  text-align: center;
}

.logout-button button {
  background: #ff4d4d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-button button:hover {
  background: #ff1a1a;
}
</style>

<script setup>
import { ref } from "vue";

const activeSection = ref("profile");

function setActiveSection(section) {
  activeSection.value = section;
}

import { ref } from "vue";

function logout() {
  // Реализуйте выход через Vuex или Firebase
  console.log("Пользователь вышел");
}
</script>
<style scoped></style>
<script setup lang="ts">
</script>