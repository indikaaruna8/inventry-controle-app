<?php

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
