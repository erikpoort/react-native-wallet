package com.mediamonks.rnwallet;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.webkit.URLUtil;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.CallbackImpl;
import com.facebook.react.bridge.JSInstance;
import com.facebook.react.bridge.NativeArray;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.intent.IntentModule;

import javax.annotation.Nullable;

/**
 * Created by erik on 04/01/2018.
 * aeromexico 2018
 */

public class RNWalletModule extends ReactContextBaseJavaModule {
    private static final String WALLET = "RNWalletModule";

    private static final String SHOEBOX = "shoebox";

    RNWalletModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override public String getName() {
        return WALLET;
    }

    @ReactMethod
    public void canAddPasses(final Callback callback) {
        getReactApplicationContext().getNativeModule(IntentModule.class).canOpenURL(SHOEBOX + "://", new Promise() {
            @Override public void resolve(@Nullable Object value) {
                callback.invoke(true);
            }

            @Override public void reject(String code, String message) {
                callback.invoke(false);
            }

            @Override public void reject(String code, Throwable e) {
                callback.invoke(false);
            }

            @Override public void reject(String code, String message, Throwable e) {
                callback.invoke(false);
            }

            @Override public void reject(String message) {
                callback.invoke(false);
            }

            @Override public void reject(Throwable reason) {
                callback.invoke(false);
            }
        });
    }

    @ReactMethod
    public void showAddPassController(final String pass, final Promise promise) {
        if (pass == null) {
            promise.reject(WALLET, "The pass URL is empty");
            return;
        }

        if (!URLUtil.isValidUrl(pass)) {
            promise.reject(WALLET, "The pass URL is invalid");
            return;
        }

        canAddPasses(new CallbackImpl(new JSInstance() {
            @Override public void invokeCallback(int callbackID, NativeArray arguments) {
                Uri uri = Uri.parse(pass);
                Uri.Builder builder = uri.buildUpon();
                builder.scheme(SHOEBOX);
                Uri passUri = builder.build();
                Intent intent = new Intent(Intent.ACTION_VIEW, passUri);

                try {
                    getReactApplicationContext().startActivity(intent);
                } catch (ActivityNotFoundException exception) {
                    promise.reject(WALLET, "Could not find an app to handle passes");
                    return;
                }

                promise.resolve("done");
            }
        }, 0));
    }
}
