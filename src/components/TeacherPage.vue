<template>
  <div class="teacher-dashboard">
    <div class="dashboard-header">
      <h1>Личный кабинет преподавателя</h1>
    </div>

    <div class="dashboard-content">
      <!-- Секция профиля -->
      <section class="profile-section">
        <h3>Мой профиль</h3>
        <div class="profile-info">
          <img class="profile-photo" src="../assets/img/teacher.png" alt="Фото профиля" />
          <div class="profile-details">
            <p><strong>Имя:</strong> Преподаватель</p>
            <p><strong>ID:</strong> 345678</p>
          </div>
        </div>
      </section>

      <!-- Секция управления -->
      <section class="teacher-controls">
        <h3>Доступные функции</h3>
        <ul>
          <li><router-link to="/assessment">Проверить оценки</router-link></li>
          <li><router-link to="/adding">Добавить новую оценку</router-link></li>
          <li><router-link to="/search">Поиск студентов</router-link></li>
        </ul>
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

<script setup>
function logout() {
  console.log("Преподаватель вышел из системы");
}
</script>

<style scoped>
.teacher-dashboard {
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
.teacher-controls {
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

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 10px 0;
}

ul li a {
  color: #007bff;
  text-decoration: none;
}

ul li a:hover {
  text-decoration: underline;
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
