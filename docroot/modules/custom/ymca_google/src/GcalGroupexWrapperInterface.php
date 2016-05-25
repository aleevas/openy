<?php

namespace Drupal\ymca_google;

/**
 * Interface GcalGroupexWrapperInterface.
 *
 * @package Drupal\ymca_google
 */
interface GcalGroupexWrapperInterface {

  /**
   * Array of entities to be cached and enriched on host system.
   *
   * @return array
   */
  public function getProxyData();

  /**
   * Set proxy data.
   *
   * @param $data
   *   Proxy data.
   */
  public function setProxyData($data);

  /**
   * Get array of source data.
   *
   * @return array
   *   Array of source data.
   */
  public function getSourceData();

  /**
   * Set source data.
   *
   * @param $data
   *   Proxy data.
   */
  public function setSourceData($data);

}
