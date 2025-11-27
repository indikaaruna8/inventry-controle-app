<?php

namespace App\Domain\Inventory\Enum;

enum StockMovementType: string
{
    case IN = 'in';
    case OUT = 'out';
    case ADJUSTMENT = 'adjustment';
    case TRANSFER = 'transfer';

    public function isPositive(): bool
    {
        return match($this) {
            self::IN, self::ADJUSTMENT => true,
            self::OUT, self::TRANSFER => false,
        };
    }
}

namespace App\Domain\Purchase\Enum;

enum PurchaseOrderStatus: string
{
    case DRAFT = 'draft';
    case ORDERED = 'ordered';
    case PARTIALLY_RECEIVED = 'partially_received';
    case COMPLETED = 'completed';
    case CANCELLED = 'cancelled';

    public function canReceive(): bool
    {
        return in_array($this, [self::ORDERED, self::PARTIALLY_RECEIVED]);
    }
}
