<?php

namespace App\Exceptions;
use Exception;

class ApyDataException extends Exception
{
   public function __construct($message = 'Error retrieving APY data', $code = 404, Exception $previous = null)
   {
      parent::__construct($message, $code, $previous);
   }
}