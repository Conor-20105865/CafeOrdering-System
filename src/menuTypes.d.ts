type Course = "starter" | "main" | "dessert";

interface Nutrition {
	calories: number;
	allergens: string[];
}

interface MenuItem {
	id: number;
	name: string;
	course: Course;
	price: number;
	nutrition: Nutrition;
	discountPercent?: number;
	availableFrom?: Date;
}

interface ComboDeal {
	id: number;
	name: string;
	items: MenuItem[];
	price: number;
}

type OrderLine = MenuItem | ComboDeal;
