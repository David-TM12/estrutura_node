import { Request, Response } from "express";

class ExemploController {
  public async exemplo(request: Request, response: Response) {
    const { exemplo } = request.body;
    console.log("teste", exemplo);
    return response.json({ message: exemplo });
  }
}
export default ExemploController;
