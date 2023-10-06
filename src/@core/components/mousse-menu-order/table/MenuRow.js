import React from 'react';
import DatePicker from 'react-datepicker';

import dayjs from 'dayjs';
import { cloneDeep } from 'lodash';

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import { useGetAdminItemPacksDetail } from 'src/hooks/api/useAdminItemPacks';

import CustomTextField from 'components/mui/text-field';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Checkbox } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import DropdownItemPacks from '../../dropdown/DropdownItemPacks';

const MenuRow = ({
  displayedRow,
  idx,
  editedPurchaseList,
  purchaseList,
  setEditedPurchaseList
}) => {
  const { isHaveOrdered, itemPacks, requireAt, totalPackQtyGlobal, uuid } =
    displayedRow || {};

  const singleItemPack = itemPacks?.[idx];

  const { itemPack } = singleItemPack || {};

  const { data: selectedItemPackData } = useGetAdminItemPacksDetail(
    itemPack?.id,
    {
      enabled: !!itemPack?.id
    }
  );

  const updateEditedPurchaseList = (
    editedIndex,
    newEditedPurchaseList,
    newData
  ) => {
    if (editedIndex >= 0) {
      newEditedPurchaseList[editedIndex] = newData;
      setEditedPurchaseList(newEditedPurchaseList);

      return;
    }

    newEditedPurchaseList = [...newEditedPurchaseList, newData];
    setEditedPurchaseList(newEditedPurchaseList);
  };

  const onChangeIsHaveOrderedCheckbox = (e) => {
    const newEditedPurchaseList = cloneDeep(editedPurchaseList);
    const copyPurchaseList = cloneDeep(purchaseList);

    const newData =
      newEditedPurchaseList?.find((purchase) => purchase?.uuid === uuid) ||
      copyPurchaseList?.find((purchase) => purchase?.uuid === uuid);

    newData.isHaveOrdered = e.target.checked;

    const editedIndex = editedPurchaseList?.findIndex(
      (purchase) => purchase?.uuid === uuid
    );
    updateEditedPurchaseList(editedIndex, newEditedPurchaseList, newData);
  };

  const getNewNumberOfOrders = ({
    isClickPlus,
    isClickMinus,
    newData,
    inputValue
  }) => {
    const currentTotalServe = parseFloat(newData.totalPackQtyGlobal);

    if (isClickPlus) {
      const incrementTotalServe = currentTotalServe + 1;

      return incrementTotalServe;
    }

    if (isClickMinus) {
      const decrementTotalServe = currentTotalServe - 1;

      return decrementTotalServe;
    }

    return inputValue;
  };

  const onChangeNumberOfOrders = ({
    inputValue,
    isClickPlus,
    isClickMinus
  }) => {
    const newEditedPurchaseList = cloneDeep(editedPurchaseList);
    const copyPurchaseList = cloneDeep(purchaseList);

    const newData =
      newEditedPurchaseList?.find((purchase) => purchase?.uuid === uuid) ||
      copyPurchaseList?.find((purchase) => purchase?.uuid === uuid);

    const newValue = getNewNumberOfOrders({
      isClickPlus,
      isClickMinus,
      newData,
      inputValue
    });

    newData.totalPackQtyGlobal = newValue;

    const editedIndex = editedPurchaseList?.findIndex(
      (purchase) => purchase?.uuid === uuid
    );
    updateEditedPurchaseList(editedIndex, newEditedPurchaseList, newData);
  };

  const onChangeItemPacksDropdown = (newValue) => {
    const newEditedPurchaseList = cloneDeep(editedPurchaseList);
    const copyPurchaseList = cloneDeep(purchaseList);

    const newData =
      newEditedPurchaseList?.find((purchase) => purchase?.uuid === uuid) ||
      copyPurchaseList?.find((purchase) => purchase?.uuid === uuid);

    newData.itemPacks[idx].itemPack.id = newValue?.id;
    newData.itemPacks[idx].itemPack.code = newValue?.code;

    const editedIndex = editedPurchaseList?.findIndex(
      (purchase) => purchase?.uuid === uuid
    );
    updateEditedPurchaseList(editedIndex, newEditedPurchaseList, newData);
  };

  const onChangeDateInput = (newDateValue) => {
    const newEditedPurchaseList = cloneDeep(editedPurchaseList);
    const copyPurchaseList = cloneDeep(purchaseList);

    const newData =
      newEditedPurchaseList?.find((purchase) => purchase?.uuid === uuid) ||
      copyPurchaseList?.find((purchase) => purchase?.uuid === uuid);

    newData.requireAt = newDateValue
      ? dayjs(newDateValue).format('YYYY-MM-DD')
      : null;

    const editedIndex = editedPurchaseList?.findIndex(
      (purchase) => purchase?.uuid === uuid
    );
    updateEditedPurchaseList(editedIndex, newEditedPurchaseList, newData);
  };

  const contentsModifier = (contents) => {
    // Only return items pack that isAlaCarteAllowed = true
    return contents?.filter((content) => content?.isAlaCarteAllowed);
  };

  return (
    <TableRow hover>
      <TableCell>
        <Checkbox
          checked={isHaveOrdered}
          onChange={onChangeIsHaveOrderedCheckbox}
        />
      </TableCell>
      <TableCell>{itemPack?.item?.course?.name}</TableCell>
      <TableCell>{itemPack?.item?.name}</TableCell>
      <TableCell>
        <Grid container spacing={2} justifyContent="right" alignItems="center">
          <Grid item xs={8}>
            <DropdownItemPacks
              withAdditionalParams
              additionalParams={{ name: itemPack?.item?.name }}
              defaultValue={
                itemPack?.id
                  ? {
                      id: itemPack?.id,
                      unitQtyOnPack: selectedItemPackData?.data?.unitQtyOnPack
                    }
                  : {}
              }
              value={
                itemPack?.id
                  ? {
                      id: itemPack?.id,
                      unitQtyOnPack: selectedItemPackData?.data?.unitQtyOnPack
                    }
                  : {}
              }
              selectorSelectedKey="unitQtyOnPack"
              onChange={(newValue) => onChangeItemPacksDropdown(newValue)}
              disableClearable
              error={!itemPack?.id}
              helperText={!itemPack?.id ? '必要' : ''}
              contentsModifier={contentsModifier}
            />
          </Grid>
          <Grid item>切</Grid>
        </Grid>
      </TableCell>
      <TableCell>
        {selectedItemPackData?.data?.unitPrice
          ? `${selectedItemPackData?.data?.unitPrice}円`
          : '-'}
      </TableCell>
      <TableCell>
        <DatePickerWrapper>
          <DatePicker
            id={`requireDate-${idx}`}
            showYearDropdown
            showMonthDropdown
            selected={
              requireAt ? new Date(requireAt?.split('/').join('-')) : null
            }
            placeholderText="YYYY/MM/DD"
            dateFormat="yyyy/MM/dd"
            customInput={<CustomTextField fullWidth />}
            onChange={onChangeDateInput}
          />
        </DatePickerWrapper>
      </TableCell>
      <TableCell>
        <Grid container spacing={2} justifyContent="right" alignItems="center">
          <Grid item xs={8}>
            <CustomTextField
              fullWidth
              type="number"
              inputProps={{ style: { textAlign: 'center' } }}
              defaultValue={totalPackQtyGlobal}
              value={totalPackQtyGlobal}
              id={`totalPackQtyGlobal-${idx}`}
              onChange={(e) =>
                onChangeNumberOfOrders({ inputValue: e.target.value })
              }
            />
          </Grid>
          <Grid item>食</Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Grid
          container
          justifyContent="right"
          alignItems="center"
          minHeight="70px"
        >
          <Grid item>
            <IconButton
              onClick={() => onChangeNumberOfOrders({ isClickPlus: true })}
            >
              <AddOutlinedIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => onChangeNumberOfOrders({ isClickMinus: true })}
            >
              <RemoveOutlinedIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default MenuRow;
