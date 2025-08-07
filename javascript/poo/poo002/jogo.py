import pygame
import random
import math
import time
from enum import Enum

# Inicialização
pygame.init()
width, height = 360, 640  # Tamanho para celular
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Clash of Clans Completo")

# Cores
BLUE = (0, 100, 255)
RED = (255, 50, 50)
GREEN = (0, 200, 0)
BROWN = (139, 69, 19)
GRAY = (150, 150, 150)
BLACK = (0, 0, 0)
GOLD = (255, 215, 0)
PURPLE = (150, 50, 200)
WHITE = (255, 255, 255)

# Tipos de construção
class BuildingType(Enum):
    TOWN_HALL = 1
    GOLD_MINE = 2
    ELIXIR_COLLECTOR = 3
    BARRACKS = 4
    LABORATORY = 5
    CANNON = 6
    ARCHER_TOWER = 7
    WALL = 8
    ARMY_CAMP = 9

# Tipos de tropas
class TroopType(Enum):
    BARBARIAN = 1
    ARCHER = 2
    GIANT = 3
    GOBLIN = 4

# Configurações do jogo
class GameConfig:
    BUILDING_COSTS = {
        BuildingType.TOWN_HALL: {"gold": 0, "elixir": 0, "time": 0},
        BuildingType.GOLD_MINE: {"gold": 150, "elixir": 0, "time": 10},
        BuildingType.ELIXIR_COLLECTOR: {"gold": 0, "elixir": 150, "time": 10},
        BuildingType.BARRACKS: {"gold": 200, "elixir": 0, "time": 30},
        BuildingType.LABORATORY: {"gold": 250, "elixir": 250, "time": 60},
        BuildingType.CANNON: {"gold": 180, "elixir": 0, "time": 15},
        BuildingType.ARCHER_TOWER: {"gold": 250, "elixir": 0, "time": 30},
        BuildingType.WALL: {"gold": 50, "elixir": 0, "time": 5},
        BuildingType.ARMY_CAMP: {"gold": 100, "elixir": 100, "time": 20}
    }
    
    TROOP_COSTS = {
        TroopType.BARBARIAN: {"elixir": 25, "time": 5},
        TroopType.ARCHER: {"elixir": 50, "time": 10},
        TroopType.GIANT: {"elixir": 150, "time": 30},
        TroopType.GOBLIN: {"elixir": 30, "time": 5}
    }
    
    UPGRADE_COSTS = {
        1: {"gold": 100, "elixir": 100, "time": 60},
        2: {"gold": 250, "elixir": 250, "time": 300},
        3: {"gold": 500, "elixir": 500, "time": 900},
        4: {"gold": 1000, "elixir": 1000, "time": 1800}
    }

# Classes do jogo
class Building:
    def __init__(self, type, x, y, level=1):
        self.type = type
        self.x = x
        self.y = y
        self.level = level
        self.max_health = 100 * level
        self.health = 100 * level
        self.last_shot = 0
        self.upgrade_time = 0
        self.is_upgrading = False
        self.construction_time = GameConfig.BUILDING_COSTS[type]["time"]
        self.construction_start = time.time()
        
    def draw(self):
        # Desenha a construção baseada no tipo
        color = GRAY
        if self.type == BuildingType.TOWN_HALL:
            color = GOLD
            pygame.draw.rect(screen, color, (self.x-15, self.y-15, 30, 30))
            pygame.draw.rect(screen, BROWN, (self.x-10, self.y-10, 20, 20))
        elif self.type == BuildingType.GOLD_MINE:
            color = GOLD
            pygame.draw.rect(screen, color, (self.x-12, self.y-12, 24, 24))
            pygame.draw.rect(screen, BROWN, (self.x-8, self.y-8, 16, 16))
        elif self.type == BuildingType.ELIXIR_COLLECTOR:
            color = PURPLE
            pygame.draw.rect(screen, color, (self.x-12, self.y-12, 24, 24))
            pygame.draw.rect(screen, WHITE, (self.x-8, self.y-8, 16, 16))
        elif self.type == BuildingType.BARRACKS:
            pygame.draw.rect(screen, RED, (self.x-15, self.y-10, 30, 20))
            pygame.draw.rect(screen, BLACK, (self.x-10, self.y-5, 20, 10))
        elif self.type == BuildingType.CANNON:
            pygame.draw.rect(screen, color, (self.x-12, self.y-12, 24, 24))
            pygame.draw.rect(screen, BLACK, (self.x-8, self.y-8, 16, 16))
        elif self.type == BuildingType.ARCHER_TOWER:
            pygame.draw.circle(screen, color, (self.x, self.y), 15)
            pygame.draw.circle(screen, BLUE, (self.x, self.y), 10)
        elif self.type == BuildingType.WALL:
            pygame.draw.rect(screen, color, (self.x-10, self.y-10, 20, 20))
            pygame.draw.rect(screen, BROWN, (self.x-8, self.y-8, 16, 16))
        elif self.type == BuildingType.ARMY_CAMP:
            pygame.draw.rect(screen, BLUE, (self.x-15, self.y-10, 30, 20))
            pygame.draw.rect(screen, WHITE, (self.x-10, self.y-5, 20, 10))
        
        # Barra de vida
        pygame.draw.rect(screen, RED, (self.x-15, self.y-25, 30, 5))
        pygame.draw.rect(screen, GREEN, (self.x-15, self.y-25, 30 * (self.health/self.max_health), 5))
        
        # Nível da construção
        font = pygame.font.SysFont(None, 20)
        level_text = font.render(f"Lv{self.level}", True, BLACK)
        screen.blit(level_text, (self.x-10, self.y-40))
        
        # Mostrar tempo de construção/upgrade
        if self.is_upgrading or time.time() - self.construction_start < self.construction_time:
            remaining = max(0, (self.construction_time - (time.time() - self.construction_start)))
            time_text = font.render(f"{int(remaining)}s", True, WHITE)
            pygame.draw.rect(screen, BLACK, (self.x-15, self.y-50, 30, 15))
            screen.blit(time_text, (self.x-10, self.y-50))
    
    def can_shoot(self):
        if self.type not in [BuildingType.CANNON, BuildingType.ARCHER_TOWER]:
            return False
            
        now = time.time()
        if now - self.last_shot > 2 - (self.level * 0.1):  # Melhora com nível
            self.last_shot = now
            return True
        return False
    
    def find_target(self):
        for enemy in game.enemies:
            dist = math.sqrt((self.x - enemy.x)**2 + (self.y - enemy.y)**2)
            if dist < 150 + (self.level * 10):  # Alcance aumenta com nível
                return enemy
        return None
    
    def collect_resources(self):
        if self.type == BuildingType.GOLD_MINE and time.time() - self.last_collection > 60:
            self.last_collection = time.time()
            return {"gold": 100 * self.level}
        elif self.type == BuildingType.ELIXIR_COLLECTOR and time.time() - self.last_collection > 60:
            self.last_collection = time.time()
            return {"elixir": 100 * self.level}
        return {}
    
    def start_upgrade(self):
        if not self.is_upgrading and game.gems >= 1:  # Gemas infinitas
            cost = GameConfig.UPGRADE_COSTS.get(self.level, {"gold": 1000, "elixir": 1000, "time": 3600})
            if game.gold >= cost["gold"] and game.elixir >= cost["elixir"]:
                game.gold -= cost["gold"]
                game.elixir -= cost["elixir"]
                self.is_upgrading = True
                self.construction_start = time.time()
                self.construction_time = cost["time"]
                return True
        return False
    
    def finish_upgrade(self):
        if self.is_upgrading and time.time() - self.construction_start >= self.construction_time:
            self.level += 1
            self.max_health = 100 * self.level
            self.health = self.max_health
            self.is_upgrading = False
            return True
        return False

class Troop:
    def __init__(self, type, x, y, level=1):
        self.type = type
        self.x = x
        self.y = y
        self.level = level
        self.max_health = 50 * level
        self.health = 50 * level
        self.speed = 1.0
        self.damage = 10 * level
        self.target = None
        
    def draw(self):
        if self.type == TroopType.BARBARIAN:
            color = (200, 150, 0)
            pygame.draw.circle(screen, color, (int(self.x), int(self.y)), 10)
            pygame.draw.rect(screen, RED, (self.x-5, self.y+8, 10, 8))
        elif self.type == TroopType.ARCHER:
            color = (255, 200, 150)
            pygame.draw.circle(screen, color, (int(self.x), int(self.y)), 8)
            pygame.draw.rect(screen, GREEN, (self.x-5, self.y+6, 10, 8))
        elif self.type == TroopType.GIANT:
            color = (150, 150, 150)
            pygame.draw.circle(screen, color, (int(self.x), int(self.y)), 15)
            pygame.draw.rect(screen, BLUE, (self.x-8, self.y+12, 16, 12))
        elif self.type == TroopType.GOBLIN:
            color = (0, 200, 0)
            pygame.draw.circle(screen, color, (int(self.x), int(self.y)), 8)
            pygame.draw.rect(screen, GOLD, (self.x-5, self.y+6, 10, 8))
        
        # Barra de vida
        pygame.draw.rect(screen, RED, (self.x-10, self.y-18, 20, 3))
        pygame.draw.rect(screen, GREEN, (self.x-10, self.y-18, 20 * (self.health/self.max_health), 3))
    
    def move(self):
        if not self.target or (hasattr(self.target, 'health') and self.target.health <= 0):
            self.find_new_target()
        
        if self.target:
            angle = math.atan2(self.target.y - self.y, self.target.x - self.x)
            self.x += math.cos(angle) * self.speed
            self.y += math.sin(angle) * self.speed
            
            # Verificar colisão com o alvo
            if math.sqrt((self.x - self.target.x)**2 + (self.y - self.target.y)**2) < 20:
                if hasattr(self.target, 'health'):
                    self.target.health -= self.damage
                    if self.target.health <= 0:
                        self.target = None
                elif self.type == TroopType.GOBLIN:  # Goblin coleta recursos
                    if isinstance(self.target, Building) and self.target.type in [BuildingType.GOLD_MINE, BuildingType.ELIXIR_COLLECTOR]:
                        resources = self.target.collect_resources()
                        game.gold += resources.get("gold", 0)
                        game.elixir += resources.get("elixir", 0)
                        self.target = None
    
    def find_new_target(self):
        closest_dist = float('inf')
        for building in game.enemy_buildings:
            if building.health > 0:
                dist = math.sqrt((self.x - building.x)**2 + (self.y - building.y)**2)
                if dist < closest_dist:
                    closest_dist = dist
                    self.target = building
        
        # Se não encontrar edifícios, ataca tropas inimigas
        if not self.target:
            for enemy in game.enemy_troops:
                if enemy.health > 0:
                    dist = math.sqrt((self.x - enemy.x)**2 + (self.y - enemy.y)**2)
                    if dist < closest_dist:
                        closest_dist = dist
                        self.target = enemy

class Projectile:
    def __init__(self, x, y, target, damage):
        self.x = x
        self.y = y
        self.target = target
        self.speed = 5
        self.damage = damage
        
    def update(self):
        if self.target and ((hasattr(self.target, 'health') and self.target.health > 0) or not hasattr(self.target, 'health')):
            angle = math.atan2(self.target.y - self.y, self.target.x - self.x)
            self.x += math.cos(angle) * self.speed
            self.y += math.sin(angle) * self.speed
            
            # Verificar se atingiu o alvo
            if math.sqrt((self.x - self.target.x)**2 + (self.y - self.target.y)**2) < 10:
                if hasattr(self.target, 'health'):
                    self.target.health -= self.damage
                return True
        else:
            return True
            
        return False
    
    def draw(self):
        pygame.draw.circle(screen, BLACK, (int(self.x), int(self.y)), 3)

class Game:
    def __init__(self):
        self.gold = 1000
        self.elixir = 500
        self.gems = 9999  # Gemas infinitas
        self.selected_building = None
        self.buildings = []
        self.troops = []
        self.enemy_buildings = []
        self.enemy_troops = []
        self.projectiles = []
        self.game_state = "building"  # building, attacking
        self.army_capacity = 20
        self.army_size = 0
        self.barracks_level = 1
        self.laboratory_level = 1
        self.last_resource_collection = time.time()
        
        # Criar vila inicial
        self.buildings.append(Building(BuildingType.TOWN_HALL, width//2, height//2))
        self.buildings.append(Building(BuildingType.GOLD_MINE, width//3, height//3))
        self.buildings.append(Building(BuildingType.ELIXIR_COLLECTOR, 2*width//3, height//3))
        
        # Criar vila inimiga
        self.generate_enemy_village()
    
    def generate_enemy_village(self):
        self.enemy_buildings = []
        self.enemy_buildings.append(Building(BuildingType.TOWN_HALL, width//4, height//4))
        self.enemy_buildings.append(Building(BuildingType.GOLD_MINE, width//5, height//5))
        self.enemy_buildings.append(Building(BuildingType.ELIXIR_COLLECTOR, width//5, 2*height//5))
        self.enemy_buildings.append(Building(BuildingType.CANNON, 2*width//5, height//4))
        self.enemy_buildings.append(Building(BuildingType.ARCHER_TOWER, width//4, 2*height//5))
        
        # Adicionar algumas muralhas
        for i in range(5):
            self.enemy_buildings.append(Building(BuildingType.WALL, width//4 + i*25, height//4 + 40))
    
    def collect_resources(self):
        now = time.time()
        if now - self.last_resource_collection > 10:  # Coletar a cada 10 segundos
            self.last_resource_collection = now
            for building in self.buildings:
                resources = building.collect_resources()
                self.gold += resources.get("gold", 0)
                self.elixir += resources.get("elixir", 0)
    
    def train_troop(self, troop_type):
        cost = GameConfig.TROOP_COSTS[troop_type]
        if self.elixir >= cost["elixir"] and self.army_size < self.army_capacity:
            self.elixir -= cost["elixir"]
            self.army_size += 1
            # Treinar tropa instantaneamente com gemas
            self.gems -= 1  # Mas temos gemas infinitas
            return Troop(troop_type, random.randint(50, width-50), height-50, self.laboratory_level)
        return None
    
    def attack_village(self):
        # Calcular estrelas (simplificado)
        destroyed = sum(1 for b in self.enemy_buildings if b.health <= 0)
        total = len(self.enemy_buildings)
        percent = destroyed / total
        
        stars = 0
        if percent >= 0.5:
            stars = 1
        if percent >= 0.8:
            stars = 2
        if self.enemy_buildings[0].health <= 0:  # Town Hall destruído
            stars = 3
        
        # Recompensa baseada nos recursos do inimigo
        reward_multiplier = {0: 0, 1: 0.2, 2: 0.5, 3: 0.8}[stars]
        gold_reward = sum(100 * b.level for b in self.enemy_buildings if b.type in [BuildingType.TOWN_HALL, BuildingType.GOLD_MINE]) * reward_multiplier
        elixir_reward = sum(100 * b.level for b in self.enemy_buildings if b.type in [BuildingType.TOWN_HALL, BuildingType.ELIXIR_COLLECTOR]) * reward_multiplier
        
        self.gold += gold_reward
        self.elixir += elixir_reward
        
        return stars

# Menu de construção
def draw_build_menu():
    pygame.draw.rect(screen, (50, 50, 50), (0, height-150, width, 150))
    
    font = pygame.font.SysFont(None, 20)
    
    # Botões de construção
    buildings = [
        (BuildingType.GOLD_MINE, 20, "Gold Mine", (255, 215, 0)),
        (BuildingType.ELIXIR_COLLECTOR, 80, "Elixir", (150, 50, 200)),
        (BuildingType.BARRACKS, 140, "Barracks", (255, 50, 50)),
        (BuildingType.CANNON, 200, "Cannon", (150, 150, 150)),
        (BuildingType.ARCHER_TOWER, 260, "Archer", (100, 100, 255)),
        (BuildingType.WALL, 20, "Wall", (139, 69, 19), 110),
        (BuildingType.ARMY_CAMP, 80, "Camp", (0, 100, 255), 110),
        (BuildingType.LABORATORY, 140, "Lab", (255, 0, 255), 110)
    ]
    
    for b in buildings:
        x_pos = b[1]
        y_pos = height-140 if len(b) < 5 else height-80
        pygame.draw.rect(screen, b[3], (x_pos, y_pos, 50, 50))
        text = font.render(b[2], True, BLACK)
        screen.blit(text, (x_pos, y_pos+55))
    
    # Botão de ataque
    pygame.draw.rect(screen, RED, (width-100, 10, 80, 40))
    text = font.render("Attack!", True, BLACK)
    screen.blit(text, (width-90, 25))

# Menu de tropas durante o ataque
def draw_attack_menu():
    pygame.draw.rect(screen, (50, 50, 50), (0, height-100, width, 100))
    
    font = pygame.font.SysFont(None, 20)
    
    troops = [
        (TroopType.BARBARIAN, 20, "Barb", (200, 150, 0)),
        (TroopType.ARCHER, 80, "Archer", (255, 200, 150)),
        (TroopType.GIANT, 140, "Giant", (150, 150, 150)),
        (TroopType.GOBLIN, 200, "Goblin", (0, 200, 0))
    ]
    
    for t in troops:
        pygame.draw.rect(screen, t[3], (t[1], height-90, 50, 50))
        text = font.render(t[2], True, BLACK)
        screen.blit(text, (t[1], height-35))
    
    # Mostrar capacidade do exército
    text = font.render(f"Army: {game.army_size}/{game.army_capacity}", True, WHITE)
    screen.blit(text, (width-120, height-80))

# Inicializar o jogo
game = Game()

# Loop principal
running = True
clock = pygame.time.Clock()

while running:
    # Atualizações do jogo
    game.collect_resources()
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            
        if event.type == pygame.MOUSEBUTTONDOWN:
            x, y = event.pos
            
            if game.game_state == "building":
                # Verificar cliques no menu de construção
                if y > height-150:
                    # Primeira linha de botões
                    if height-150 < y < height-90:
                        if 20 <= x <= 70:
                            game.selected_building = BuildingType.GOLD_MINE
                        elif 80 <= x <= 130:
                            game.selected_building = BuildingType.ELIXIR_COLLECTOR
                        elif 140 <= x <= 190:
                            game.selected_building = BuildingType.BARRACKS
                        elif 200 <= x <= 250:
                            game.selected_building = BuildingType.CANNON
                        elif 260 <= x <= 310:
                            game.selected_building = BuildingType.ARCHER_TOWER
                    # Segunda linha de botões
                    elif height-90 < y < height-30:
                        if 20 <= x <= 70:
                            game.selected_building = BuildingType.WALL
                        elif 80 <= x <= 130:
                            game.selected_building = BuildingType.ARMY_CAMP
                        elif 140 <= x <= 190:
                            game.selected_building = BuildingType.LABORATORY
                else:
                    # Colocar construção
                    if game.selected_building:
                        cost = GameConfig.BUILDING_COSTS[game.selected_building]
                        if game.gold >= cost["gold"] and game.elixir >= cost["elixir"]:
                            game.gold -= cost["gold"]
                            game.elixir -= cost["elixir"]
                            new_building = Building(game.selected_building, x, y)
                            game.buildings.append(new_building)
                            # Usar gemas para construir instantaneamente
                            game.gems -= 1
                            new_building.construction_time = 0
                            game.selected_building = None
                
                # Verificar clique no botão de ataque
                if width-100 <= x <= width-20 and 10 <= y <= 50:
                    game.game_state = "attacking"
            
            elif game.game_state == "attacking":
                # Verificar cliques no menu de tropas
                if y > height-100:
                    troop_type = None
                    if 20 <= x <= 70:
                        troop_type = TroopType.BARBARIAN
                    elif 80 <= x <= 130:
                        troop_type = TroopType.ARCHER
                    elif 140 <= x <= 190:
                        troop_type = TroopType.GIANT
                  