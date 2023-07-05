<?php

namespace App\Exceptions;
use Exception;

class TransactionConfirmationException extends Exception
{
   public function __construct($message = 'Error confirming transaction. Wrong ID or already verified', $code = 404, Exception $previous = null)
   {
      parent::__construct($message, $code, $previous);
   }
}