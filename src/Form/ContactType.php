<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'constraints' => [new NotBlank()],
            ])
            ->add('email', null, [
                'constraints' => [
                    new NotBlank(),
                    new Email(['message' => 'The email "{{ value }}" is not a valid email.']),
                ],
            ])
            ->add('subject', null, [
                'constraints' => [new NotBlank()],
            ])
            ->add('message', TextareaType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Submit',
                'attr' => ['class' => 'btn'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            
        ]);
    }
}
