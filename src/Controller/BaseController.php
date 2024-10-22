<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Services\AppServices;

class BaseController extends AbstractController
{
    public function __construct(protected AppServices $appServices)
    {
        $this->appServices = $appServices;
    }
}
