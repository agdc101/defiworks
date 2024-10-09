<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Services\AppServices;

class BaseController extends AbstractController
{
    protected AppServices $appServices;

    public function __construct(AppServices $appServices)
    {
        $this->appServices = $appServices;
    }
}
