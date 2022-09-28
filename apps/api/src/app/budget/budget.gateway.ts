import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
/* import { UpdateBudgetDto } from './dto/update-budget.dto'; */
import { Server, Socket} from 'socket.io';
@WebSocketGateway(81,{
  cors:{
    origin:['http://localhost:3333']
  }
}
)
export class BudgetGateway {
  constructor(private readonly budgetService: BudgetService) {}

  @WebSocketServer()
  server: Server

  @SubscribeMessage('createBudget')
  async create(@MessageBody() createBudgetDto: CreateBudgetDto) {
    const message = await this.budgetService.createBudget(createBudgetDto);
    this.server.emit('message', message)
    return message
  }

  @SubscribeMessage('findAllBudget')
  findAll() {
    return this.budgetService.getBudgets();
  }

  @SubscribeMessage('findOneBudget')
  findOne(@MessageBody() id: string) {
    return this.budgetService.getBudget(id);
  }

  /* @SubscribeMessage('updateBudget')
  update(@MessageBody() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.updateBudget(updateBudgetDto.id, updateBudgetDto);
  }
 */
  @SubscribeMessage('removeBudget')
  remove(@MessageBody() id: string) {
    return this.budgetService.deleteBudget(id);
  }
}
