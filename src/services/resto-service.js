export default class RestoService {
    async getResource() {
        const res = await fetch(`http://localhost:3000/db`);

        if (!res.ok) {
            throw new Error(`Could not fetch , status: ${res.status}`);
        }

        return await res.json();
    };

    async getMenuItems() {
        return await this.getResource();
    }
}
